import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-main-footer',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './main-footer.component.html',
  styleUrl: './main-footer.component.css'
})
export class MainFooterComponent {

}
