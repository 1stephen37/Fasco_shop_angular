import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {MainHeaderComponent} from "../../components/main-header/main-header.component";
import {MainFooterComponent} from "../../components/main-footer/main-footer.component";
import {NavigationEnd, Router} from "@angular/router";
import { isPlatformBrowser } from '@angular/common';

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
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: any) {
    if(isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0);
        }
      });
    }
  }
}
