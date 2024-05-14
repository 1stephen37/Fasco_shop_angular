import { Component } from '@angular/core';
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";
import {Section7Component} from "../../components/section7/section7.component";
import {NgIcon} from "@ng-icons/core";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-checkout-view',
  standalone: true,
  imports: [
    MainLayoutComponent,
    Section7Component,
    NgIcon,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './checkout-view.component.html',
  styleUrl: './checkout-view.component.css'
})
export class CheckoutViewComponent {

}
