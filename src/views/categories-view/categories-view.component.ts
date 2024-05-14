import {Component, ViewChild} from '@angular/core';
import {AdminLayoutComponent} from "../../layouts/admin-layout/admin-layout.component";
import {AdminButtonComponent} from "../../components/admin-button/admin-button.component";

@Component({
  selector: 'app-categories-view',
  standalone: true,
  imports: [
    AdminLayoutComponent,
    AdminButtonComponent
  ],
  templateUrl: './categories-view.component.html',
  styleUrl: './categories-view.component.css'
})
export class CategoriesViewComponent {

}
