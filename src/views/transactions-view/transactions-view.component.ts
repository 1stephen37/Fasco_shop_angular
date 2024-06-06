import { Component } from '@angular/core';
import {AdminLayoutComponent} from "../../layouts/admin-layout/admin-layout.component";

@Component({
  selector: 'app-transactions-view',
  standalone: true,
  imports: [
    AdminLayoutComponent
  ],
  templateUrl: './transactions-view.component.html',
  styleUrl: './transactions-view.component.css'
})
export class TransactionsViewComponent {

}
