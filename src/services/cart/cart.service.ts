import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart[] = [];

  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorage = this.document.defaultView?.localStorage;
    if (localStorage) {
      this.cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
    }
  }

  setCart(cart: Cart[]) {
    this.cart = cart;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addCart(cart: Cart) {
    this.cart.push(cart);
    this.setCart(this.cart);
  }

  getCart(): Cart[] {
    return this.cart;
  }

}
