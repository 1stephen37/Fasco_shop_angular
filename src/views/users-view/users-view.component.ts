import { Component } from '@angular/core';
import {AdminLayoutComponent} from "../../layouts/admin-layout/admin-layout.component";
import {AdminButtonComponent} from "../../components/admin-button/admin-button.component";
import {UsersModelService} from "../../models/usersModel/users-model.service";
import {roleUser} from "../../constants";

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
  userList! : any;
  page : number = 1;
  limit: number = 10;
  constructor(private UserModel : UsersModelService) {}
  ngOnInit() {
    this.UserModel.findUsersByPageAndLimit(this.page, this.limit)
      .then(users => {
        this.userList = users;
        console.log(this.userList);
      })
      .catch(error => {
        console.log(error);
      })
  }

  protected readonly roleUser = roleUser;
}
