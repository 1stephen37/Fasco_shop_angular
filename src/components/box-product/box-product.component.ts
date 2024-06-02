import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {API} from "../../constants";
import {Router, RouterLink} from "@angular/router";
import {transformCurrency} from "../../helper/curency";

@Component({
  selector: 'app-box-product',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './box-product.component.html',
  styleUrl: './box-product.component.css'
})
export class BoxProductComponent {
  @Input() id : string = "0";
  @Input() name : string = '';
  @Input() image : string = '';
  @Input() designer : string = '';
  @Input() color : string = '';
  @Input() price : number = 0;
  @Input() properties : {
    size : string,
    quantity : number,
    price : number
  }[] = [];
  protected readonly API = API;
  protected readonly transformCurrency = transformCurrency;
  constructor(private router : Router) {}
  handleDetail(name: string, id : string) {
    this.router.navigate([`/detail/${name}`])
      .catch(err => console.log(err));
    sessionStorage.setItem('idProduct', JSON.stringify(id));
  }
}
