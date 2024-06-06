import { Component } from '@angular/core';
import {AccountLayoutComponent} from "../../layouts/account-layout/account-layout.component";

@Component({
  selector: 'app-reset-password-view',
  standalone: true,
  imports: [
    AccountLayoutComponent
  ],
  templateUrl: './reset-password-view.component.html',
  styleUrl: './reset-password-view.component.css'
})
export class ResetPasswordViewComponent {

}
