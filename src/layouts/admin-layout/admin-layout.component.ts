import {Component} from '@angular/core';
import {NgIcon, provideIcons} from "@ng-icons/core";
import {
  faSolidHouseChimney,
  faSolidList,
  faSolidShirt,
  faSolidUser,
  faSolidCartShopping,
  faSolidTicket,
  faSolidTruck, faSolidRightFromBracket, faSolidGear, faSolidBell, faSolidHouseChimneyCrack
} from '@ng-icons/font-awesome/solid'
import {Router, RouterLink} from "@angular/router";
import {AdminButtonComponent} from "../../components/admin-button/admin-button.component";


@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    NgIcon,
    RouterLink,
    AdminButtonComponent
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css',
  viewProviders: [provideIcons({
    faSolidHouseChimney, faSolidList, faSolidShirt, faSolidUser, faSolidCartShopping, faSolidTicket, faSolidTruck,
    faSolidRightFromBracket, faSolidGear, faSolidBell, faSolidHouseChimneyCrack
  })]
})
export class AdminLayoutComponent {

  constructor(private router: Router) {}

  isActive(url: string): boolean {
    return this.router.url.split('/')[2] === url;
  }

}
