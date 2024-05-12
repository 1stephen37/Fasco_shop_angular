import {Routes} from '@angular/router';
import {HomeViewComponent} from "../views/home-view/home-view.component";
import {ShopViewComponent} from "../views/shop-view/shop-view.component";
import {AboutViewComponent} from "../views/about-view/about-view.component";

export const routes: Routes = [
  {
    path: '', component: HomeViewComponent
  },
  {
    path: 'shop', component: ShopViewComponent
  },
  {
    path: 'shop/:id', component: ShopViewComponent
  },
  {
    path: 'about', component: AboutViewComponent
  }
];
