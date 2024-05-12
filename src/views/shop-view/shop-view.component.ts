import { Component } from '@angular/core';
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";

@Component({
  selector: 'app-shop-view',
  standalone: true,
  imports: [
    MainLayoutComponent
  ],
  templateUrl: './shop-view.component.html',
  styleUrl: './shop-view.component.css'
})
export class ShopViewComponent {

}
