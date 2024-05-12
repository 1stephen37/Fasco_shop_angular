import { Component } from '@angular/core';
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";
import {Section3Component} from "../../components/section3/section3.component";

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    MainLayoutComponent,
    Section3Component
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {

}
