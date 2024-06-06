import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {NgIcon, provideIcons} from "@ng-icons/core";
import {faSolidBagShopping, faSolidClockRotateLeft, faSolidMagnifyingGlass} from '@ng-icons/font-awesome/solid'
import {RouterLink, RouterLinkActive} from "@angular/router";
import {faUser} from "@ng-icons/font-awesome/regular";
import {UsersModelService} from "../../models/usersModel/users-model.service";
import { isPlatformBrowser } from "@angular/common";
import {CartService} from "../../services/cart/cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [NgIcon, RouterLink, RouterLinkActive],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css',
  viewProviders: [provideIcons({
    faSolidMagnifyingGlass, faUser, faSolidClockRotateLeft, faSolidBagShopping
  })]
})
export class MainHeaderComponent {
  isLogin: boolean = false;
  cartLength: number = 0;
  cart!: Cart[];

  constructor(private usersModel : UsersModelService, @Inject(PLATFORM_ID) platformId: Object, protected cartService: CartService) {
    if(isPlatformBrowser(platformId)) {
      this.cart = this.cartService.getCart();
      this.cartLength = this.cart.reduce((total, item) => total += item.quantity, 0);
      this.isLogin = this.usersModel.checkLogin();
    }
  }

}
