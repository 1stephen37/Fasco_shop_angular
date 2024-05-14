import { Component } from '@angular/core';
import {AccountLayoutComponent} from "../../layouts/account-layout/account-layout.component";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-sign-up-view',
  standalone: true,
  imports: [
    AccountLayoutComponent,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sign-up-view.component.html',
  styleUrl: './sign-up-view.component.css'
})
export class SignUpViewComponent {

}
