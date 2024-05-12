import { Component } from '@angular/core';
import {NgIcon, provideIcons} from "@ng-icons/core";
import {faSolidBagShopping, faSolidClockRotateLeft, faSolidMagnifyingGlass} from '@ng-icons/font-awesome/solid'
import {RouterLink, RouterLinkActive} from "@angular/router";
import {faUser} from "@ng-icons/font-awesome/regular";

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

}
