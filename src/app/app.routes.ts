import {Routes} from '@angular/router';
import {HomeViewComponent} from "../views/home-view/home-view.component";
import {ShopViewComponent} from "../views/shop-view/shop-view.component";
import {AboutViewComponent} from "../views/about-view/about-view.component";
import {AdminViewComponent} from "../views/admin-view/admin-view.component";
import {SignInViewComponent} from "../views/sign-in-view/sign-in-view.component";
import {ContactViewComponent} from "../views/contact-view/contact-view.component";
import {CartViewComponent} from "../views/cart-view/cart-view.component";
import {SignUpViewComponent} from "../views/sign-up-view/sign-up-view.component";
import {HistoryViewComponent} from "../views/history-view/history-view.component";
import {ForgetPasswordViewComponent} from "../views/forget-password-view/forget-password-view.component";
import {InformationViewComponent} from "../views/information-view/information-view.component";
import {CheckoutViewComponent} from "../views/checkout-view/checkout-view.component";
import {CategoriesViewComponent} from "../views/categories-view/categories-view.component";
import {DeliveriesViewComponent} from "../views/deliveries-view/deliveries-view.component";
import {ProductsViewComponent} from "../views/products-view/products-view.component";
import {VouchersViewComponent} from "../views/vouchers-view/vouchers-view.component";
import {UsersViewComponent} from "../views/users-view/users-view.component";
import {OrdersViewComponent} from "../views/orders-view/orders-view.component";
import {DetailViewComponent} from "../views/detail-view/detail-view.component";
import {PageNotFoundComponent} from "../views/page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path: '', component: HomeViewComponent
  },
  {
    path: 'shop', component: ShopViewComponent
  },
  {
    path: 'detail/:id', component: DetailViewComponent
  },
  {
    path: 'about', component: AboutViewComponent
  },
  {
    path: 'contact', component: ContactViewComponent
  },
  {
    path: 'cart', component: CartViewComponent
  },
  {
    path: 'history', component: HistoryViewComponent
  },
  {
    path: 'admin/dashboard', component: AdminViewComponent
  },
  {
    path: 'sign-in', component: SignInViewComponent
  },
  {
    path: 'sign-up', component: SignUpViewComponent
  },
  {
    path: 'forget-password', component: ForgetPasswordViewComponent
  },
  {
    path: 'information', component: InformationViewComponent
  },
  {
    path: 'checkout', component: CheckoutViewComponent
  },
  {
    path: 'admin/categories', component: CategoriesViewComponent
  },
  {
    path: 'admin/deliveries', component: DeliveriesViewComponent
  },
  {
    path: 'admin/products', component: ProductsViewComponent
  },
  {
    path: 'admin/vouchers', component: VouchersViewComponent
  },
  {
    path: 'admin/users', component: UsersViewComponent
  },
  {
    path: 'admin/orders', component: OrdersViewComponent
  },
  {
    path: 'admin', redirectTo : 'admin/dashboard', pathMatch: "full"
  },
  {
    path: '**', component: PageNotFoundComponent, pathMatch: "full"
  },
];
