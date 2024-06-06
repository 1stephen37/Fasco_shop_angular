import {ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import {AccountLayoutComponent} from "../../layouts/account-layout/account-layout.component";
import {NgOptimizedImage} from "@angular/common";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {UsersModelService} from "../../models/usersModel/users-model.service";
import {NotificationComponent} from "../../components/notification/notification.component";
import { faSolidEye, faSolidEyeLowVision } from '@ng-icons/font-awesome/solid'

@Component({
  selector: 'app-sign-in-view',
  standalone: true,
  imports: [
    AccountLayoutComponent,
    NgOptimizedImage,
    NgIcon,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    NotificationComponent
  ],
  templateUrl: './sign-in-view.component.html',
  styleUrl: './sign-in-view.component.css',
  viewProviders: [provideIcons({
    faSolidEye, faSolidEyeLowVision
  })]
})
export class SignInViewComponent {
  @ViewChild(NotificationComponent) notificationComponent!: NotificationComponent;
  @ViewChild('message_error') errorMessageSpan!: ElementRef;
  @ViewChild('password') passwordInput!: ElementRef;
  isPasswordOrText: boolean = false;
  formSignIn!: FormGroup;
  href: string = '/';

  ngOnInit() {
    this.formSignIn = new FormGroup({
        'email': new FormControl('', [Validators.required, Validators.email]),
        'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      });
  }

  ngAfterViewInit() {
    this.notificationComponent.hide();
  }

  constructor(private UsersModel : UsersModelService, private cdr: ChangeDetectorRef) {}

  onLogin() {
    if (this.formSignIn.get('email')?.valid && this.formSignIn.get('password')?.valid) {
      const user = {
        email: this.formSignIn.get('email')?.value,
        password: this.formSignIn.get('password')?.value
      }
      this.UsersModel.SignIn(user)
        .then((data) => {
          localStorage.setItem('user', JSON.stringify(data));
          localStorage.setItem('isLogin', JSON.stringify(true));
          this.errorMessageSpan.nativeElement.style.display = 'none';
          if(data.isAdmin) {
            this.href = '/admin/dashboard'
          }
          this.notificationComponent.showNotification();
        })
        .catch((error : Error | any) => {
          this.errorMessageSpan.nativeElement.style.display = 'block';
          this.errorMessageSpan.nativeElement.style.fontWeight = '600';
          this.errorMessageSpan.nativeElement.textContent = error.error.message;
        })
    } else {
      this.errorMessageSpan.nativeElement.style.display = 'block';
      this.errorMessageSpan.nativeElement.style.fontWeight = '600';
      this.errorMessageSpan.nativeElement.textContent = 'Thông tin đăng nhập có sai sót';
    }
  }

  switchPasswordOrText() {
    this.isPasswordOrText = !this.isPasswordOrText;
    if(this.isPasswordOrText) this.passwordInput.nativeElement.type = 'text'; else this.passwordInput.nativeElement.type = 'password';
  }
}
