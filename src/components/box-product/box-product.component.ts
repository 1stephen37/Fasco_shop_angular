import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {API} from "../../constants";


@Component({
  selector: 'app-box-product',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './box-product.component.html',
  styleUrl: './box-product.component.css'
})
export class BoxProductComponent {
  @Input() id : number = 0;
  @Input() name : string = '';
  @Input() image : string = '';
  @Input() designer : string = '';
  @Input() color : string = '';
  @Input() price : number = 0;
  @Input() size : string[] = [];
  protected readonly API = API;
}
