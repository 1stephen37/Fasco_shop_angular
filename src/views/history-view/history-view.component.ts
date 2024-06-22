import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";
import {OrderModelService} from "../../models/ordersModel/order-model.service";
import {UsersModelService} from "../../models/usersModel/users-model.service";
import {isPlatformBrowser} from "@angular/common";
import {transformCurrency} from "../../helper/curency";
import {orderStatus} from "../../constants";

@Component({
  selector: 'app-history-view',
  standalone: true,
  imports: [
    MainLayoutComponent
  ],
  templateUrl: './history-view.component.html',
  styleUrl: './history-view.component.css'
})
export class HistoryViewComponent {
  isLogin: boolean = false;
  orders!: Order[];
  user : any;

  constructor(private ordersModel: OrderModelService, private usersModel: UsersModelService, @Inject(PLATFORM_ID) platformId: object) {
    if (isPlatformBrowser(platformId)) {
      this.isLogin = this.usersModel.checkLogin();
      this.user = this.usersModel.getUser();
      if(this.isLogin) {
        this.ordersModel.findOrderByIdUser(this.user.id_user, this.user.token)
          .then((response) => {
            this.orders = response;
          })
      }
    }

  }


  protected readonly transformCurrency = transformCurrency;
  protected readonly orderStatus = orderStatus;
}
