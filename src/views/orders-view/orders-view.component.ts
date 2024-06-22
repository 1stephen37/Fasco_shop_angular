import {Component, ElementRef, Inject, inject, PLATFORM_ID, ViewChild} from '@angular/core';
import {AdminLayoutComponent} from "../../layouts/admin-layout/admin-layout.component";
import {OrderModelService} from "../../models/ordersModel/order-model.service";
import {UsersModelService} from "../../models/usersModel/users-model.service";
import {OrderDetailsModelService} from "../../models/orderDetailsModel/order-details-model.service";
import {API, orderStatus} from "../../constants";
import {transformCurrency} from "../../helper/curency";
import {isPlatformBrowser, NgOptimizedImage} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-orders-view',
  standalone: true,
  imports: [
    AdminLayoutComponent,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './orders-view.component.html',
  styleUrl: './orders-view.component.css'
})
export class OrdersViewComponent {
  @ViewChild('detail') detail! : ElementRef;
  @ViewChild('update') update! : ElementRef;
  formUpdateStatus! : FormGroup;
  indexOrder: number = 0;
  orders! : Order[];
  order! : Order;
  page : number = 1;
  limit: number = 10;
  orderDetails!: any[];
  user! : any;
  idOrderUpdate: string = '';
  orderStatusCanUpdate = orderStatus;

  constructor(@Inject(PLATFORM_ID) platform : Object,private ordersModel : OrderModelService, private usersModel : UsersModelService,
              private orderDetailsModel : OrderDetailsModelService) {
    this.formUpdateStatus = new FormGroup({
      "status": new FormControl(0)
    })
    if(isPlatformBrowser(platform)) {
      this.user = this.usersModel.getUser()
      this.ordersModel.findOrdersByPage(((this.page -1) * this.limit), this.limit, this.user.token)
        .then(data => {
          this.orders = data as Order[];
          for(let index in this.orders) {
            this.orders[index].createdAt = new Date(this.orders[index].createdAt as string).toLocaleString();
          }
          this.order = this.orders[this.indexOrder];
        })
    }
  }

  ngOnInit(){
  }

  ngAfterInit() {
  }

  onDetail(id : string, index : number) {
    this.detail.nativeElement.style.display = 'flex';
    this.order = this.orders[index];
    this.orderDetailsModel.findAllOrderDetailsByIdOrder(id, this.user.token)
      .then((data) => {
        this.orderDetails = data as [];
      })
  }

  hiddenDetail() {
    this.detail.nativeElement.style.display = 'none';
  }

  hiddenUpdate() {
    this.update.nativeElement.style.display = 'none';
  }

  onUpdateDetailStatus(id: string) {
    this.hiddenDetail();
    this.update.nativeElement.style.display = 'flex';
    this.idOrderUpdate = id;
    console.log(id);
  }

  onSubmitUpdateStatus() {
    console.log(this.formUpdateStatus.value.status);
  }

  protected readonly orderStatus = orderStatus;
  protected readonly transformCurrency = transformCurrency;
  protected readonly API = API;
  protected readonly Object = Object;
}
