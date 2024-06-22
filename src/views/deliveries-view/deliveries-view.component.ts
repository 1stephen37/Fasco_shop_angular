import { Component } from '@angular/core';
import {AdminLayoutComponent} from "../../layouts/admin-layout/admin-layout.component";
import {DeliveriesModelService} from "../../models/deliveriesModel/deliveries-model.service";
import {deliveryStatus} from "../../constants";

@Component({
  selector: 'app-deliveries-view',
  standalone: true,
  imports: [
    AdminLayoutComponent
  ],
  templateUrl: './deliveries-view.component.html',
  styleUrl: './deliveries-view.component.css'
})
export class DeliveriesViewComponent {
  page : number = 1;
  limit: number = 10;
  deliveriesList! : Delivery[];

  constructor(private DeliveriesModel : DeliveriesModelService) {
    this.DeliveriesModel.findDeliveriesByPage(this.page, this.limit)
      .then((data) => {
        this.deliveriesList = data as Delivery[];
      })
  }


  protected readonly deliveryStatus = deliveryStatus;
}
