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
import {InformationComponent} from "../views/information/information.component";
import {WerehouseViewComponent} from "../views/werehouse-view/werehouse-view.component";
import {SizeViewComponent} from "../views/size-view/size-view.component";
import {TransactionsViewComponent} from "../views/transactions-view/transactions-view.component";
import {ResetPasswordViewComponent} from "../views/reset-password-view/reset-password-view.component";
import {SendEmailViewComponent} from "../views/send-email-view/send-email-view.component";

export let routes: Routes;
routes = [
  {
    path: '', component: HomeViewComponent
  },
  {
    path: 'shop', component: ShopViewComponent
  },
  {
    path: 'detail/:name', component: DetailViewComponent
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
    path: 'account', component: InformationComponent
  },
  {
    path: 'sign-up', component: SignUpViewComponent
  },
  {
    path: 'forget-password', component: ForgetPasswordViewComponent
  },
  {
    path: 'reset-password', component: ResetPasswordViewComponent
  },
  {
    path: 'send-email', component: SendEmailViewComponent
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
    path: 'admin/were-house', component: WerehouseViewComponent
  },
  {
    path: 'admin/sizes', component: SizeViewComponent
  },
  {
    path: 'admin/transactions', component: TransactionsViewComponent
  },
  {
    path: 'admin/orders', component: OrdersViewComponent
  },
  {
    path: 'admin', redirectTo: 'admin/dashboard', pathMatch: "full"
  },
  {
    path: '**', component: PageNotFoundComponent, pathMatch: "full"
  },
];
