import {Component, inject} from '@angular/core';
import {NgIcon, provideIcons} from "@ng-icons/core";
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";
import {Section5Component} from "../../components/section5/section5.component";
import {Section7Component} from "../../components/section7/section7.component";
import {CategoriesModelService} from "../../models/categoriesModel/categories-model.service";
import {ProductsModelService} from "../../models/productsModel/products-model.service";
import {NgOptimizedImage} from "@angular/common";
import {BoxProductComponent} from "../../components/box-product/box-product.component";
import {faSolidArrowUpWideShort, faSolidArrowDownWideShort} from '@ng-icons/font-awesome/solid'
import {faUser} from "@ng-icons/font-awesome/regular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shop-view',
  standalone: true,
  imports: [
    MainLayoutComponent,
    Section5Component,
    Section7Component,
    NgOptimizedImage,
    BoxProductComponent,
    NgIcon
  ],
  templateUrl: './shop-view.component.html',
  styleUrl: './shop-view.component.css',
  viewProviders: [provideIcons({
    faSolidArrowUpWideShort, faSolidArrowDownWideShort
  })]
})
export class ShopViewComponent {
  private CategoriesModel = inject(CategoriesModelService);
  private ProductsModel = inject(ProductsModelService);
  page: number = 1;
  limit: number = 6;
  selectedCategory!: number;
  categoriesList!: Category[];
  productsList!: Product[];
  sizes: any[] = [];

  constructor(private router : Router) {

    // for (let key in this.productsList) {
    //   console.log(this.productsList)
    //   this.sizes.push({
    //     [this.productsList[key].id_product]: this.productsList[key].properties.map(p => p.size)
    //   });
    // console.log(this.sizes)
    // }
  }

  ngOnInit() {
    this.CategoriesModel.findAllCategories()
      .then(categories => {
        this.categoriesList = categories as Category[];
        if (this.categoriesList.length > 0) this.selectedCategory = parseInt(this.categoriesList[0].id_category);
        this.ProductsModel.findProductsByCategoryAndPage(this.selectedCategory, this.page, this.limit)
          .then((products) => {
            this.productsList = products.data as Product[];
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  handleSwitchCategory(event: any) {
    console.log(event.target.value);
    this.selectedCategory = event.target.value;
    this.page = 1;
    this.ProductsModel.findProductsByCategoryAndPage(this.selectedCategory, this.page, this.limit)
      .then((data) => {
        this.productsList = data.data;
      })
      .catch((error) => console.log(error));
  }

  handleSortUpProduct() {
    this.ProductsModel.findProductsByCategoryAndPage(this.selectedCategory, this.page, this.limit, 'price', 'asc')
      .then((data) => {
        this.productsList = data.data;
      })
      .catch((error) => console.log(error));
  }

  handleSortDownProduct() {
    this.ProductsModel.findProductsByCategoryAndPage(this.selectedCategory, this.page, this.limit, 'price', 'desc')
      .then((data) => {
        this.productsList = data.data;
      })
      .catch((error) => console.log(error));
  }


}
