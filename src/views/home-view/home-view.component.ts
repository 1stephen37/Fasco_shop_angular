import {Component, inject} from '@angular/core';
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";
import {Section3Component} from "../../components/section3/section3.component";
import {Section5Component} from "../../components/section5/section5.component";
import {Section7Component} from "../../components/section7/section7.component";
import {MainButtonComponent} from "../../components/main-button/main-button.component";
import {CategoriesModelService} from "../../models/categoriesModel/categories-model.service";
import {ProductsModelService} from "../../models/productsModel/products-model.service";
import {NgOptimizedImage} from "@angular/common";
import {API} from "../../constants";
import {transformCurrency} from "../../helper/curency";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    MainLayoutComponent,
    Section3Component,
    Section5Component,
    Section7Component,
    MainButtonComponent,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css',
  providers: []
})
export class HomeViewComponent {
  protected readonly parseInt = parseInt;
  categoriesList!: Category[];
  selectedCategory: number = 2;
  productsList: Product[] = [];
  protected readonly API = API;
  protected readonly transformCurrency = transformCurrency;

  constructor(private CategoriesModel: CategoriesModelService, private ProductsModel: ProductsModelService, private router : Router) {}

  async ngOnInit() {
    this.categoriesList = await this.CategoriesModel.findCategoriesByLimit(5) as Category[];
    if (this.selectedCategory === 0) this.selectedCategory = parseInt(this.categoriesList[1].id_category);
    this.ProductsModel.findProductsByCategoryAndPage(this.selectedCategory, 1, 6)
      .then((products) => {
        this.productsList = products.data;
      })
      .catch(err => console.log(err))
  }

  handleCategories = (id: string, event: Event): void => {
    event.preventDefault();
    this.selectedCategory = parseInt(id);
    this.productsList = [];
    this.ProductsModel.findProductsByCategoryAndPage(this.selectedCategory, 1, 6)
      .then((data) => {
        this.productsList = data.data;
      })
  }

  handleDetail(name: string, id : string) {
    this.router.navigate([`/detail/${name}`])
      .catch(err => console.log(err));
    sessionStorage.setItem('idProduct', JSON.stringify(id));
  }
}
