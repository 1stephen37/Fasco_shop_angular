import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ButtonClickComponent} from "../button-click/button-click.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [
    ButtonClickComponent
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  @ViewChild('notification') notification!: ElementRef;
  @Input() message!: string;

  constructor(private router : Router) {}

  showNotification() {
    this.notification.nativeElement.style.display = 'flex';
  }

  hide() {
    this.notification.nativeElement.style.display = 'none';
  }

  click() {
    this.notification.nativeElement.style.display = 'none';
    this.router.navigate(['/'])
      .catch(err => console.error(err))
  }
}
