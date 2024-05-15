import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-admin-form',
  standalone: true,
  imports: [],
  templateUrl: './admin-form.component.html',
  styleUrl: './admin-form.component.css'
})
export class AdminFormComponent {
  @Input() type : string = '';
}
