import { Component } from '@angular/core';
import {AdminLayoutComponent} from "../../layouts/admin-layout/admin-layout.component";

@Component({
  selector: 'app-reviews-view',
  standalone: true,
  imports: [
    AdminLayoutComponent
  ],
  templateUrl: './reviews-view.component.html',
  styleUrl: './reviews-view.component.css'
})
export class ReviewsViewComponent {

}
