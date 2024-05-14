import { Component } from '@angular/core';
import {AdminLayoutComponent} from "../../layouts/admin-layout/admin-layout.component";

@Component({
  selector: 'app-orders-view',
  standalone: true,
  imports: [
    AdminLayoutComponent
  ],
  templateUrl: './orders-view.component.html',
  styleUrl: './orders-view.component.css'
})
export class OrdersViewComponent {

}
