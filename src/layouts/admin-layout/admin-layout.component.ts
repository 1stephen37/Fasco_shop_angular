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
  faSolidMoneyBill1, faSolidSitemap, faSolidComment
} from '@ng-icons/font-awesome/solid'
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {AdminButtonComponent} from "../../components/admin-button/admin-button.component";
import {isPlatformBrowser} from "@angular/common";
import {UsersModelService} from "../../models/usersModel/users-model.service";


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
    faSolidMoneyBill1,
    faSolidSitemap,
    faSolidComment
  })]
})
export class AdminLayoutComponent {
  Admin!: User;

  constructor(protected router: Router, @Inject(PLATFORM_ID) private platformId: object, private UsersModel : UsersModelService) {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0);
        }
      })
      const user = this.UsersModel.getUser();
      this.UsersModel.findUserById(user.id_user, user.token)
        .then((user) => {
          this.Admin = user as User;
        })
    }
  }

  isActive(url: string): boolean {
    return this.router.url.split('/')[2] === url;
  }

  onLogout() {
    localStorage.removeItem('user');
    localStorage.setItem('isLogin', JSON.stringify(false));
    this.router.navigateByUrl('/').then(() => {})
  }
}
