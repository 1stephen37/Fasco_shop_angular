import { Component } from '@angular/core';
import {AdminLayoutComponent} from "../../layouts/admin-layout/admin-layout.component";
import {AdminButtonComponent} from "../../components/admin-button/admin-button.component";

@Component({
  selector: 'app-products-view',
  standalone: true,
  imports: [
    AdminLayoutComponent,
    AdminButtonComponent
  ],
  templateUrl: './products-view.component.html',
  styleUrl: './products-view.component.css'
})
export class ProductsViewComponent {

}
