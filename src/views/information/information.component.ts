import {Component, Inject, PLATFORM_ID, ViewChild} from '@angular/core';
import {AccountLayoutComponent} from "../../layouts/account-layout/account-layout.component";
import {UsersModelService} from "../../models/usersModel/users-model.service";
import {NgOptimizedImage} from "@angular/common";
import {API} from "../../constants";
import {Router, RouterLink} from "@angular/router";
import {NotificationComponent} from "../../components/notification/notification.component";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [
    AccountLayoutComponent,
    NgOptimizedImage,
    RouterLink,
    NotificationComponent
  ],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  @ViewChild(NotificationComponent) notification!: NotificationComponent;
  user! : any;
  userNow!: {
    id_user: string,
    token: string
  }

  constructor(private usersModel: UsersModelService, private router : Router, @Inject(PLATFORM_ID) platform : Object) {
    if(isPlatformBrowser(platform)) {
      this.userNow = this.usersModel.getUser();
      this.usersModel.findUserById(this.userNow.id_user, this.userNow.token)
        .then(user => {
          this.user = user;
        })
    }
  }

  onLogout() {
    localStorage.removeItem('user');
    localStorage.setItem('isLogin', JSON.stringify(false));
    this.notification.showNotification();
  }

  protected readonly API = API;
}
