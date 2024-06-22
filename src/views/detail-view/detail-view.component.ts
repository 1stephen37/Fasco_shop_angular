import {Component, ElementRef, Inject, PLATFORM_ID, ViewChild} from '@angular/core';
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";
import {Section5Component} from "../../components/section5/section5.component";
import {Section7Component} from "../../components/section7/section7.component";
import {NgOptimizedImage} from "@angular/common";
import {ProductsModelService} from "../../models/productsModel/products-model.service";
import {transformCurrency} from "../../helper/curency";
import {API} from "../../constants";
import {isPlatformBrowser} from "@angular/common";
import {AddToCartComponent} from "../../components/add-to-cart/add-to-cart.component";
import {CartService} from "../../services/cart/cart.service";
import {ReviewsModelService} from "../../models/reviewsModel/reviews-model.service";
import {UsersModelService} from "../../models/usersModel/users-model.service";
import {RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";


@Component({
  selector: 'app-detail-view',
  standalone: true,
  imports: [
    MainLayoutComponent,
    Section5Component,
    Section7Component,
    NgOptimizedImage,
    AddToCartComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.css'
})
export class DetailViewComponent {
  @ViewChild('main_img') mainImage!: ElementRef;
  @ViewChild(AddToCartComponent) addToCardElement!: AddToCartComponent;
  reviewForm! : FormGroup;
  user!: User;
  reviewsList!: Review[];
  indexProperty: number = 0;
  idProduct!: string;
  product!: Product;
  quantity: number = 1;
  isLogin: boolean = false;

  constructor(private productsModel: ProductsModelService, @Inject(PLATFORM_ID) private platformId: Object, private cartService: CartService
    , private reviewsModel: ReviewsModelService, private usersModel : UsersModelService) {
    this.reviewForm = new FormGroup({
      'content': new FormControl('', [Validators.required])
    })
    if (isPlatformBrowser(this.platformId)) {
      this.idProduct = JSON.parse(sessionStorage.getItem('idProduct') as string);
      this.isLogin = this.usersModel.checkLogin();
    }
    this.productsModel.findProductById(this.idProduct)
      .then((product) => {
        this.product = product as Product;
      })
    this.reviewsModel.findAllReviewsByIdProduct(this.idProduct)
      .then((reviews) => {
        this.reviewsList = reviews as Review[];
      })
  }

  ngOnInit() {
    if(this.isLogin) {
      const user = this.usersModel.getUser();
      this.usersModel.findUserById(user.id_user, user.token)
        .then((response) => {
          this.user = response as User;
        })
    }
  }

  onSubmitReview() {
    if(this.reviewForm.get('content')?.valid) {
      const user = this.usersModel.getUser()
      this.reviewsModel.createReview({
        id_product: this.product.id_product,
        id_user: user.id_user,
        content: this.reviewForm.value.content
      }, user.token)
        .then((data) => {
          this.reviewForm.get('content')?.reset();
          this.reviewsList.push(data as Review);
        })
    }
  }

  handleUpQuantity() {
    if (this.quantity < 10) this.quantity++; else return;
  }

  handleDownQuantity() {
    if (this.quantity > 1) this.quantity--; else return;
  }

  protected readonly transformCurrency = transformCurrency;
  protected readonly API = API;

  handleSwitchImage(event: any) {
    this.mainImage.nativeElement.src = event.target.src;
  }

  handleSwitchSize(index: number) {
    this.indexProperty = index;
  }

  addToCard() {
    this.addToCardElement.show();
    let cart = this.cartService.getCart();
    console.log(cart);
    const index = cart.findIndex(item => item.id_product === this.idProduct && item.size === this.product.properties[this.indexProperty].size);
    if (index >= 0) {
      cart[index].quantity += this.quantity;
      this.cartService.setCart(cart);
    } else {
      cart.push({
        id_product: this.product.id_product,
        name: this.product.name,
        price: this.product.properties[this.indexProperty].price,
        stock: this.product.properties[this.indexProperty].quantity,
        sale_off: this.product.sale_off,
        quantity: this.quantity,
        color: this.product.color,
        image: this.product.image,
        size: this.product.properties[this.indexProperty].size
      });
      this.cartService.setCart(cart);
    }
  }
}
