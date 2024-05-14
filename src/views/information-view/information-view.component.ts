import { Component } from '@angular/core';
import {AccountLayoutComponent} from "../../layouts/account-layout/account-layout.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-information-view',
  standalone: true,
  imports: [
    AccountLayoutComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './information-view.component.html',
  styleUrl: './information-view.component.css'
})
export class InformationViewComponent {

}
