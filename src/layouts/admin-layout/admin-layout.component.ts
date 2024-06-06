import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {NgIcon, provideIcons} from "@ng-icons/core";
import {
  faSolidHouseChimney,
  faSolidList,
  faSolidShirt,
  faSolidUser,
  faSolidCartShopping,
  faSolidTicket,
  faSolidTruck,
  faSolidRightFromBracket,
  faSolidGear,
  faSolidBell,
  faSolidHouseChimneyCrack,
  faSolidWarehouse,
  faSolidMoneyBill1, faSolidSitemap
} from '@ng-icons/font-awesome/solid'
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {AdminButtonComponent} from "../../components/admin-button/admin-button.component";
import {isPlatformBrowser} from "@angular/common";


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
    faSolidRightFromBracket, faSolidGear, faSolidBell, faSolidHouseChimneyCrack, faSolidWarehouse, faSolidMoneyBill1, faSolidSitemap
  })]
})
export class AdminLayoutComponent {

  constructor(protected router: Router, @Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0);
        }
      });
    }
  }

  isActive(url: string): boolean {
    return this.router.url.split('/')[2] === url;
  }

}
