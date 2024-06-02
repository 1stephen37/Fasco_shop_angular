import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";
import {Section5Component} from "../../components/section5/section5.component";
import {Section7Component} from "../../components/section7/section7.component";
import {NgOptimizedImage} from "@angular/common";
import {ProductsModelService} from "../../models/productsModel/products-model.service";
import {transformCurrency} from "../../helper/curency";
import {API} from "../../constants";
import {isPlatformBrowser} from "@angular/common";


@Component({
  selector: 'app-detail-view',
  standalone: true,
  imports: [
    MainLayoutComponent,
    Section5Component,
    Section7Component,
    NgOptimizedImage
  ],
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.css'
})
export class DetailViewComponent {
  idProduct!: string;
  product: Product = {
    id_product : '1',
    id_category: '1',
    review: 0,
    designer: '',
    image: '',
    images: [],
    properties: [
      {
        price: 1,
        quantity: 1,
        size: 'M'
      }
    ],
    status: 1,
    color: '',
    name: '',
    updatedAt: '',
    createdAt: '',
    sale_off: 1
  };
  quantity: number = 1;
  constructor(private productsModel : ProductsModelService, @Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.idProduct = JSON.parse(sessionStorage.getItem('idProduct') as string);
    }
    this.productsModel.findProductById(this.idProduct)
      .then((product) => {
        this.product = product as Product;
      })
  }

  handleUpQuantity() {
    if(this.quantity < 10) this.quantity++; else return;
  }
  handleDownQuantity() {
    if(this.quantity > 1) this.quantity--; else return;
  }
  protected readonly transformCurrency = transformCurrency;
  protected readonly API = API;
}
