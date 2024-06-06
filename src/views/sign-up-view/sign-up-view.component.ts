import {Component, ElementRef, ViewChild} from '@angular/core';
import {AccountLayoutComponent} from "../../layouts/account-layout/account-layout.component";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {calculateDistance, validateAddress} from "../../helper/OpenStreetMapApi";
import {UsersModelService} from "../../models/usersModel/users-model.service";
import {NotificationComponent} from "../../components/notification/notification.component";

@Component({
  selector: 'app-sign-up-view',
  standalone: true,
  imports: [
    AccountLayoutComponent,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    NotificationComponent
  ],
  templateUrl: './sign-up-view.component.html',
  styleUrl: './sign-up-view.component.css'
})
export class SignUpViewComponent {
  SignUpForm!: FormGroup;
  @ViewChild('errorAddress') errorAddress! : ElementRef;
  @ViewChild('confirmError') confirmError! : ElementRef;
  @ViewChild(NotificationComponent) notificationComponent! : NotificationComponent;
  @ViewChild('formError') formError! : ElementRef;

  constructor(private usersModel : UsersModelService) {}

  ngOnInit() {
    this.SignUpForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'address': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'phone': new FormControl('', [Validators.required, Validators.minLength(10),
        Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'confirmPassword': new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  async onSignUp() {
    if (this.SignUpForm.get('name')?.valid && this.SignUpForm.get('email') && this.SignUpForm.get('address')?.valid
      && this.SignUpForm.get('phone')?.valid && this.SignUpForm.get('password')?.valid && this.SignUpForm.get('confirmPassword')?.valid) {
      if(!(await validateAddress(this.SignUpForm.get('address')?.value))) {
        this.formError.nativeElement.textContent = 'địa chỉ bạn nhập không hợp lệ';
        return;
      }
      if(!(this.SignUpForm.get('password')?.value === this.SignUpForm.get('confirmPassword')?.value)) {
        this.formError.nativeElement.textContent = 'xác nhận mật khẩu phải giống mật khẩu';
        return;
      }
      const user = {
        name : this.SignUpForm.value.name,
        email : this.SignUpForm.value.email,
        phone : this.SignUpForm.value.phone,
        address : this.SignUpForm.value.address,
        password : this.SignUpForm.value.password,
      }
      this.usersModel.SignUp(user)
        .then((data) => {
          localStorage.setItem('user', JSON.stringify(data));
          localStorage.setItem('isLogin', JSON.stringify(true));
          this.notificationComponent.showNotification();
        })
    } else {
      this.formError.nativeElement.textContent = 'Bạn phải nhập đầy đủ thông tin hợp lệ';
      return;
    }
  }
}
