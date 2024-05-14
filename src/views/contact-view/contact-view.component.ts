import { Component } from '@angular/core';
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";
import {NgOptimizedImage} from "@angular/common";
import {Section7Component} from "../../components/section7/section7.component";

@Component({
  selector: 'app-contact-view',
  standalone: true,
  imports: [
    MainLayoutComponent,
    NgOptimizedImage,
    Section7Component
  ],
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.css'
})
export class ContactViewComponent {

}
