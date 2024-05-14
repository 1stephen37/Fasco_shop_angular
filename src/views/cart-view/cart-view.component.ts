import { Component } from '@angular/core';
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";
import {Section7Component} from "../../components/section7/section7.component";
import {MainButtonComponent} from "../../components/main-button/main-button.component";

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [
    MainLayoutComponent,
    Section7Component,
    MainButtonComponent
  ],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent {

}
