import {Component, Inject, PLATFORM_ID, ViewChild} from '@angular/core';
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";
import {Section7Component} from "../../components/section7/section7.component";
import {MainButtonComponent} from "../../components/main-button/main-button.component";
import {CartService} from "../../services/cart/cart.service";
import {NgOptimizedImage} from "@angular/common";
import {API} from "../../constants";
import {transformCurrency} from "../../helper/curency";
import {WrapModelService} from "../../models/wrapModel/wrap-model.service";
import { isPlatformBrowser } from "@angular/common";
import {ConfirmComponent} from "../../components/confirm/confirm.component";

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [
    MainLayoutComponent,
    Section7Component,
    MainButtonComponent,
    NgOptimizedImage,
    ConfirmComponent
  ],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent {
  @ViewChild(ConfirmComponent) Confirm! : ConfirmComponent;
  cart : Cart[] = [];
  wrapPrice: number = 0;
  totalPrice: number = 0;
  isWrap: boolean = false;
  DeleteIndex : number = 0;
  constructor(private cartService: CartService, private wrapService: WrapModelService, @Inject(PLATFORM_ID) private platform: Object) {
    this.cart = this.cartService.getCart();
    this.wrapService.findWrap().then((result) => {
      this.wrapPrice = result.price;
      if(isPlatformBrowser(platform)) {
        this.isWrap = JSON.parse(localStorage.getItem('isWrap') as string);
      }
      this.handleTotal();
    });
  }

  protected readonly API = API;
  protected readonly transformCurrency = transformCurrency;

  handleUp(index: number) {
    if(this.cart[index].quantity < 10) {
      this.cart[index].quantity += 1;
      this.handleTotal();
      this.cartService.setCart(this.cart);
    }
  }

  handleDown(index : number) {
    if(this.cart[index].quantity > 1) {
      this.cart[index].quantity -= 1;
      this.handleTotal();
      this.cartService.setCart(this.cart);
    }
  }

  handleDelete(index: number) {
    this.DeleteIndex = index;
    this.Confirm.show();
  }

  DeleteItem() {
    this.cart.splice(this.DeleteIndex, 1);
    this.cartService.setCart(this.cart);
    this.handleTotal();
    this.Confirm.hide();
  }

  handleTotal() {
    this.cart = this.cartService.getCart();
    this.totalPrice = this.cart.reduce((total, item) => total = total + (item.price * item.quantity), 0);
    if(this.isWrap) {
      this.totalPrice += this.wrapPrice;
    }
  }

  handleCheckWrap() {
    this.isWrap = !this.isWrap;
    localStorage.setItem('isWrap', JSON.stringify(this.isWrap));
    this.handleTotal();
  }

}
