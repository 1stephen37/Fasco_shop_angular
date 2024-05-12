import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-main-button',
  standalone: true,
  imports: [],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.css'
})
export class MainButtonComponent {
  @Input() href? : string = '';
  @Input() class? : string = '';
}
