import { Component } from '@angular/core';
import {AccountLayoutComponent} from "../../layouts/account-layout/account-layout.component";
import {NgOptimizedImage} from "@angular/common";
import {NgIcon} from "@ng-icons/core";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-sign-in-view',
  standalone: true,
  imports: [
    AccountLayoutComponent,
    NgOptimizedImage,
    NgIcon,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sign-in-view.component.html',
  styleUrl: './sign-in-view.component.css'
})
export class SignInViewComponent {

}
