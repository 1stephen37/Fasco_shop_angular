import { Component } from '@angular/core';
import {AdminLayoutComponent} from "../../layouts/admin-layout/admin-layout.component";
import {AdminButtonComponent} from "../../components/admin-button/admin-button.component";
import {ProductsModelService} from "../../models/productsModel/products-model.service";
import {CategoriesModelService} from "../../models/categoriesModel/categories-model.service";
import {API} from "../../constants";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-products-view',
  standalone: true,
  imports: [
    AdminLayoutComponent,
    AdminButtonComponent,
    NgOptimizedImage
  ],
  templateUrl: './products-view.component.html',
  styleUrl: './products-view.component.css'
})
export class ProductsViewComponent {
  productsList! : Product[];
  categoryList! : Category[];
  page : number = 1;
  limit: number = 10;
  id_category : string = '0';

  constructor(private  productModel : ProductsModelService, private categoriesModel : CategoriesModelService) {
    this.categoriesModel.findAllCategories()
      .then((data) => {
        this.categoryList = data as Category[];
        this.id_category = this.categoryList[0].id_category;
        this.productModel.findProductsByCategoryAndPage(parseInt(this.id_category), this.page, this.limit)
          .then((data) => {
            this.productsList = data.data as Product[];
          })
      })
  }

  protected readonly API = API;
}
