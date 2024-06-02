import { Component } from '@angular/core';
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";
import {RouterLink} from "@angular/router";
import {MainButtonComponent} from "../../components/main-button/main-button.component";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    MainLayoutComponent,
    RouterLink,
    MainButtonComponent
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
