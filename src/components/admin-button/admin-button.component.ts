import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-admin-button',
  standalone: true,
  imports: [],
  templateUrl: './admin-button.component.html'
})
export class AdminButtonComponent {
  @Input() message : string = '';
  @Input() class? : string = '';
}
