import {Component, Input} from '@angular/core';
import {RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-button-click',
  standalone: true,
    imports: [
        RouterLinkActive
    ],
  templateUrl: './button-click.component.html'
})
export class ButtonClickComponent {
  @Input() class? : string = '';
  @Input() message : string = '';
  @Input() click! : () => void;
}
