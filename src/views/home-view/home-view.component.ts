import {Component, inject} from '@angular/core';
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";
import {Section3Component} from "../../components/section3/section3.component";
import {Section5Component} from "../../components/section5/section5.component";
import {Section7Component} from "../../components/section7/section7.component";
import {MainButtonComponent} from "../../components/main-button/main-button.component";
import {CategoriesModelService} from "../../models/categoriesModel/categories-model.service";
import {ProductsModelService} from "../../models/productsModel/products-model.service";

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    MainLayoutComponent,
    Section3Component,
    Section5Component,
    Section7Component,
    MainButtonComponent
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css',
  providers: []
})
export class HomeViewComponent {
  protected readonly parseInt = parseInt;
  private CategoriesModel = inject(CategoriesModelService);
  private ProductsModel = inject(ProductsModelService);
  categoriesList: Category[] = [];
  selectedCategory: number = 0;
  productsList: Product[] = [];

  constructor() {
    this.CategoriesModel.findCategoriesLimit(5)
      .then(categories => {
        this.categoriesList = categories;
        if (this.selectedCategory === 0) this.selectedCategory = parseInt(this.categoriesList[1].id_category);
      })
      .catch(err => console.log(err));

  }

  handleCategories = (id: number, event: Event): void => {
    event.preventDefault();
    this.selectedCategory = id;
  }
}
