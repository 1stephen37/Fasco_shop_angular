import { Component } from '@angular/core';
import {AdminLayoutComponent} from "../../layouts/admin-layout/admin-layout.component";

@Component({
  selector: 'app-werehouse-view',
  standalone: true,
    imports: [
        AdminLayoutComponent
    ],
  templateUrl: './werehouse-view.component.html',
  styleUrl: './werehouse-view.component.css'
})
export class WerehouseViewComponent {

}
