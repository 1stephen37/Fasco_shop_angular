import { Component, Input } from '@angular/core';
import {NgIcon} from "@ng-icons/core";
import {RouterLink, RouterLinkActive} from "@angular/router";


@Component({
  selector: 'app-main-button',
  standalone: true,
  imports: [
    NgIcon,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './main-button.component.html'
})
export class MainButtonComponent {
  @Input() href : string = '';
  @Input() class? : string = '';
  @Input() message : string = '';
}
