import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart! : any;
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('cart') as string) || [];
  }


  set setCart(cart: any) {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart = cart;
  }

  getCart() : any {
    return this.cart;
  }

}
