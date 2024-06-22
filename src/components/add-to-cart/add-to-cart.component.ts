import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {API} from "../../constants";

@Component({
  selector: 'app-add-to-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent {
  @ViewChild('addCart') addCart! : ElementRef;
  @Input() name! : string;
  @Input() color! : string;
  @Input() image!: string;
  @Input() price! : number;
  @Input() quantity!: number;

  ngAfterViewInit() {
    this.hide();
  }


  hide() {
    this.addCart.nativeElement.style.display = 'none';
  }

  show() {
    this.addCart.nativeElement.style.display = 'block';
  }

  protected readonly API = API;
}
