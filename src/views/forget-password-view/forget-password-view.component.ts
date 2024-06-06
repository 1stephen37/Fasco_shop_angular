import {Component} from '@angular/core';
import {AdminLayoutComponent} from "../../layouts/admin-layout/admin-layout.component";
import {AccountLayoutComponent} from "../../layouts/account-layout/account-layout.component";
import {Router, RouterLink} from "@angular/router";
import {UsersModelService} from "../../models/usersModel/users-model.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-forget-password-view',
  standalone: true,
  imports: [
    AdminLayoutComponent,
    AccountLayoutComponent,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './forget-password-view.component.html',
  styleUrl: './forget-password-view.component.css'
})
export class ForgetPasswordViewComponent {
  form: FormGroup = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private router: Router, private usersModel: UsersModelService) {
  }

  onForget() {
    if (this.form.get('email')?.valid) {
      this.usersModel.checkEmail(this.form.get('email')?.value)
        .then((data) => {
          if(data) {
            this.usersModel.resetPassword({
              email: data.email,
              id_user: data.id_user,
              role: data.role
            })
              .then(() => {
                this.router.navigateByUrl('/send-email')
                  .then(() => {})
              })
          }
        })
    }
  }

}
