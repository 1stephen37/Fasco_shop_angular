import { Component } from '@angular/core';
import {MainHeaderComponent} from "../../components/main-header/main-header.component";
import {MainFooterComponent} from "../../components/main-footer/main-footer.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    MainHeaderComponent,
    MainFooterComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
