import { Component } from '@angular/core';
import {AccountLayoutComponent} from "../../layouts/account-layout/account-layout.component";

@Component({
  selector: 'app-send-email-view',
  standalone: true,
  imports: [
    AccountLayoutComponent
  ],
  templateUrl: './send-email-view.component.html',
  styleUrl: './send-email-view.component.css'
})
export class SendEmailViewComponent {

}
