import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-account-layout',
  standalone: true,
  imports: [],
  templateUrl: './account-layout.component.html'
})
export class AccountLayoutComponent {
  @Input() class? : string = '';
}
