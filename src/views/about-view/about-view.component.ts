import { Component } from '@angular/core';
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-adbout-view',
  standalone: true,
  imports: [
    MainLayoutComponent,
    NgOptimizedImage
  ],
  templateUrl: './about-view.component.html',
  styleUrl: './about-view.component.css'
})
export class AboutViewComponent {

}
