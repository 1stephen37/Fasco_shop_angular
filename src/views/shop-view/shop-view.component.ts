import {Component, inject} from '@angular/core';
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";
import {Section5Component} from "../../components/section5/section5.component";
import {Section7Component} from "../../components/section7/section7.component";
import {CategoriesModelService} from "../../models/categoriesModel/categories-model.service";
import {ProductsModelService} from "../../models/productsModel/products-model.service";
import {NgOptimizedImage} from "@angular/common";
import {BoxProductComponent} from "../../components/box-product/box-product.component";

@Component({
  selector: 'app-shop-view',
  standalone: true,
  imports: [
    MainLayoutComponent,
    Section5Component,
    Section7Component,
    NgOptimizedImage,
    BoxProductComponent
  ],
  templateUrl: './shop-view.component.html',
  styleUrl: './shop-view.component.css'
})
export class ShopViewComponent {
  private CategoriesModel = inject(CategoriesModelService);
  private ProductsModel = inject(ProductsModelService);
  categoriesList: Category[] = [];
  productsList: Product[] = [];
  sizes: any[] = [];

  constructor() {
    this.CategoriesModel.findAllCategories()
      .then(categories => {
        this.categoriesList = categories;
      })
      .catch(err => console.log(err));
    this.ProductsModel.findProductsByCategoryAndPage(1, 1, 6)
      .then(products => {
        this.productsList = products;
      })
      .catch(err => console.log(err));
    for (let key in this.productsList) {
      console.log(this.productsList)
      this.sizes.push({
        [this.productsList[key].id_product]: this.productsList[key].properties.map(p => p.size)
      });
    console.log(this.sizes)
    }
  }

}
