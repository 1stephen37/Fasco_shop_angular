import {Component, inject} from '@angular/core';
import {NgIcon, provideIcons} from "@ng-icons/core";
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";
import {Section5Component} from "../../components/section5/section5.component";
import {Section7Component} from "../../components/section7/section7.component";
import {CategoriesModelService} from "../../models/categoriesModel/categories-model.service";
import {ProductsModelService} from "../../models/productsModel/products-model.service";
import {NgOptimizedImage} from "@angular/common";
import {BoxProductComponent} from "../../components/box-product/box-product.component";
import { faSolidArrowUpWideShort, faSolidArrowDownWideShort} from '@ng-icons/font-awesome/solid'
import {faUser} from "@ng-icons/font-awesome/regular";

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
  // private CategoriesModel = inject(CategoriesModelService);
  // private ProductsModel = inject(ProductsModelService);
  categoriesList: Category[] = [
    {
      id_category: "1",
      name: 'thời trang nữ',
      updatedAt: "",
      createdAt: ""
    },
    {
      id_category: "2",
      name: 'thời trang nam',
      updatedAt: "",
      createdAt: ""
    },
    {
      id_category: "3",
      name: 'phụ kiện nam',
      updatedAt: "",
      createdAt: ""
    },
    {
      id_category: "4",
      name: 'phụ kiện nữ',
      updatedAt: "",
      createdAt: ""
    },
    {
      id_category: "5",
      name: 'đặc biệt',
      updatedAt: "",
      createdAt: ""
    }
  ];
  productsList: Product[] = [
    {
      id_product: 1,
      id_category: 1,
      name: "sản phẩm mẫu",
      properties: [{}],
      designer: "Daxuo",
      color: "red",
      image: "product7.svg",
      images: [],
      id_sale: 1,
      sale: 10,
      review: 0,
      status: 1,
      quantity: 200,
      createdAt: "",
      updatedAt: ""
    },
    {
      id_product: 1,
      id_category: 1,
      name: "sản phẩm mẫu",
      properties: [{}],
      designer: "Daxuo",
      color: "red",
      image: "product7.svg",
      images: [],
      id_sale: 1,
      sale: 10,
      review: 0,
      status: 1,
      quantity: 200,
      createdAt: "",
      updatedAt: ""
    },
    {
      id_product: 1,
      id_category: 1,
      name: "sản phẩm mẫu",
      properties: [{}],
      designer: "Daxuo",
      color: "red",
      image: "product7.svg",
      images: [],
      id_sale: 1,
      sale: 10,
      review: 0,
      status: 1,
      quantity: 200,
      createdAt: "",
      updatedAt: ""
    },
    {
      id_product: 1,
      id_category: 1,
      name: "sản phẩm mẫu",
      properties: [{}],
      designer: "Daxuo",
      color: "red",
      image: "product7.svg",
      images: [],
      id_sale: 1,
      sale: 10,
      review: 0,
      status: 1,
      quantity: 200,
      createdAt: "",
      updatedAt: ""
    },
    {
      id_product: 1,
      id_category: 1,
      name: "sản phẩm mẫu",
      properties: [{}],
      designer: "Daxuo",
      color: "red",
      image: "product7.svg",
      images: [],
      id_sale: 1,
      sale: 10,
      review: 0,
      status: 1,
      quantity: 200,
      createdAt: "",
      updatedAt: ""
    },
    {
      id_product: 1,
      id_category: 1,
      name: "sản phẩm mẫu",
      properties: [{}],
      designer: "Daxuo",
      color: "red",
      image: "product7.svg",
      images: [],
      id_sale: 1,
      sale: 10,
      review: 0,
      status: 1,
      quantity: 200,
      createdAt: "",
      updatedAt: ""
    }
  ];
  sizes: any[] = [];

  constructor() {
    // this.CategoriesModel.findAllCategories()
    //   .then(categories => {
    //     this.categoriesList = categories;
    //   })
    //   .catch(err => console.log(err));
    // this.ProductsModel.findProductsByCategoryAndPage(1, 1, 6)
    //   .then(products => {
    //     this.productsList = products;
    //   })
    //   .catch(err => console.log(err));
    // for (let key in this.productsList) {
    //   console.log(this.productsList)
    //   this.sizes.push({
    //     [this.productsList[key].id_product]: this.productsList[key].properties.map(p => p.size)
    //   });
    // console.log(this.sizes)
    // }
  }

}
