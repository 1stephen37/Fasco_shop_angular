import { Component } from '@angular/core';
import {AdminLayoutComponent} from "../../layouts/admin-layout/admin-layout.component";
import {AdminButtonComponent} from "../../components/admin-button/admin-button.component";

@Component({
  selector: 'app-users-view',
  standalone: true,
  imports: [
    AdminLayoutComponent,
    AdminButtonComponent
  ],
  templateUrl: './users-view.component.html',
  styleUrl: './users-view.component.css'
})
export class UsersViewComponent {

}
