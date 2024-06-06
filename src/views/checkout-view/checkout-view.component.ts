import {Component, Inject, PLATFORM_ID, ViewChild} from '@angular/core';
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";
import {Section7Component} from "../../components/section7/section7.component";
import {NgIcon} from "@ng-icons/core";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {UsersModelService} from "../../models/usersModel/users-model.service";
import {FormControl, FormGroup, ReactiveFormsModule, FormControlName} from "@angular/forms";
import {CartService} from "../../services/cart/cart.service";
import {NgOptimizedImage} from "@angular/common";
import {API} from "../../constants";
import {transformCurrency} from "../../helper/curency";
import {VouchersModelService} from "../../models/vouchersModel/vouchers-model.service";
import {DeliveriesModelService} from "../../models/deliveriesModel/deliveries-model.service";
import {isPlatformBrowser} from "@angular/common";
import {MainButtonComponent} from "../../components/main-button/main-button.component";
import {calculateDistance} from "../../helper/OpenStreetMapApi";
import {WrapModelService} from "../../models/wrapModel/wrap-model.service";
import {OrderModelService} from "../../models/ordersModel/order-model.service";
import {OrderDetailsModelService} from "../../models/orderDetailsModel/order-details-model.service";
import {NotificationComponent} from "../../components/notification/notification.component";

@Component({
  selector: 'app-checkout-view',
  standalone: true,
  imports: [
    MainLayoutComponent,
    Section7Component,
    NgIcon,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    NgOptimizedImage,
    MainButtonComponent,
    NotificationComponent
  ],
  templateUrl: './checkout-view.component.html',
  styleUrl: './checkout-view.component.css'
})
export class CheckoutViewComponent {
  @ViewChild(NotificationComponent) notification!: NotificationComponent;
  isAdmin: boolean = false;
  isLogin: boolean = false;
  isWrap: boolean = false;
  wrapPrice: number = 0;
  user!: User;
  cart!: Cart[];
  deliveries!: Deliveries[];
  deliverySelected: number = 0;
  vouchers!: Voucher[];
  voucherSelected: number = 0;
  orderForm!: FormGroup;
  distance: number = 0;
  subTotal: number = 0;
  total: number = 0;

  constructor(private usersModel: UsersModelService, private cartService: CartService,
              private vouchersModel: VouchersModelService, private deliveriesModel: DeliveriesModelService,
              @Inject(PLATFORM_ID) platform: Object, private wrapModel: WrapModelService
              , private ordersModel : OrderModelService, private orderDetailsModel: OrderDetailsModelService) {
    if (isPlatformBrowser(platform)) {
      this.isLogin = this.usersModel.checkLogin();
      if (this.isLogin) {
        this.isAdmin = this.usersModel.checkAdmin();
      }
      this.isWrap = Boolean(JSON.stringify(localStorage.getItem('isWrap') as string));
      if (this.isLogin) {
        const userNow = this.usersModel.getUser();
        this.usersModel.findUserById(userNow.id_user, userNow.token)
          .then(result => {
            this.user = result as User;
            this.orderForm = new FormGroup({
              'date': new FormControl(new Date().toISOString().slice(0, 19).replace('T', ' ')),
              'name': new FormControl(this.user.name),
              'address': new FormControl(this.user.address),
              'phone': new FormControl(this.user.phone),
              'email': new FormControl(this.user.email)
            });
            this.orderForm.get('date')?.disable();
            calculateDistance(this.orderForm.get('address')?.value)
              .then(distance => {
                this.distance = distance as number;
                this.deliveriesModel.findALlDeliveries()
                  .then((response) => {
                    this.deliveries = response as Deliveries[];
                    this.vouchersModel.findVouchersByAmount(this.totalPriceCart())
                      .then((res) => {
                        this.vouchers = res as Voucher[];
                        this.wrapModel.findWrap()
                          .then(response => {
                            this.wrapPrice = response.price;
                            this.handleSubTotal();
                            this.handleTotal();
                          })
                      });
                  });
              });
          })
      }
    }
    this.cart = this.cartService.getCart();

  }

  onSwitchDeliveries(index: number) {
    this.deliverySelected = index;
    this.handleSubTotal();
    this.handleTotal();
  }

  onSwitchVouchers(index: number) {
    this.voucherSelected = index;
    this.handleSubTotal();
    this.handleTotal();
  }

  handleSubTotal() {
    if (this.isWrap) {
      this.subTotal = Math.round((this.totalPriceCart() * (1 - ((this.vouchers[this.voucherSelected].discount) / 100)) + this.wrapPrice) / 1000) * 1000;
    } else {
      this.subTotal = Math.round(this.totalPriceCart() * (1 - (this.vouchers[this.voucherSelected].discount / 100)) / 1000) * 1000;
    }
  }

  handleTotal() {
    this.total = Math.round((this.subTotal + (this.deliveries[this.deliverySelected].price * this.distance)) / 1000) * 1000;
  }

  totalPriceCart() {
    return this.cart.reduce((total, item) => total += item.quantity * item.price, 0)
  }

  onCheckOut() {
    if (this.orderForm.get('name')?.valid && this.orderForm.get('email')?.valid && this.orderForm.get('phone')?.valid && this.orderForm.get('address')?.valid) {
      const userNow = this.usersModel.getUser();
      const order = {
        id_delivery : this.deliveries[this.deliverySelected].id_delivery,
        id_user : userNow.id_user,
        voucher_code : this.vouchers ? this.vouchers[this.voucherSelected].code : null,
        email: this.orderForm.get('email')?.value,
        phone: this.orderForm.get('phone')?.value,
        address: this.orderForm.get('address')?.value,
        name : this.orderForm.get('name')?.value,
        distance: this.distance,
        ship_fee: Math.round((this.distance * this.deliveries[this.deliverySelected].price) / 1000) * 1000,
        total: this.total,
        status: 0,
        createdAT: this.orderForm.get('date')?.value
      };
      this.ordersModel.createOrder(order, userNow.token)
        .then((order) => {
          for(let item of this.cart) {
            const orderDetail = {
              id_product : item.id_product,
              id_order: order.id_order,
              price: item.price,
              sale_off: item.sale_off,
              quantity: item.quantity,
              size: item.size
            };
            this.orderDetailsModel.createOrderDetail(orderDetail, userNow.token)
              .then(() => {})
          }
          localStorage.removeItem('cart');
          this.notification.showNotification();
        })
    } else {
      return;
    }
  }

  protected readonly API = API;
  protected readonly transformCurrency = transformCurrency;
  protected readonly Number = Number;
  protected readonly Math = Math;
}
