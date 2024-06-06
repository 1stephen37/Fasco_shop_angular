import {Component, Inject, Input, PLATFORM_ID} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-account-layout',
  standalone: true,
  imports: [],
  templateUrl: './account-layout.component.html'
})
export class AccountLayoutComponent {
  @Input() class? : string = '';
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
