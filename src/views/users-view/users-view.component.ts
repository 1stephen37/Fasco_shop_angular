import {Component, ElementRef, ViewChild} from '@angular/core';
import {AdminLayoutComponent} from "../../layouts/admin-layout/admin-layout.component";
import {AdminButtonComponent} from "../../components/admin-button/admin-button.component";
import {UsersModelService} from "../../models/usersModel/users-model.service";
import {API, roleUser} from "../../constants";
import {FormComponent} from "../../components/form/form.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {getImageUrl} from "../../helper/imageURL";
import {NotificationComponent} from "../../components/notification/notification.component";
import {ConfirmComponent} from "../../components/confirm/confirm.component";

@Component({
  selector: 'app-users-view',
  standalone: true,
  imports: [
    AdminLayoutComponent,
    AdminButtonComponent,
    FormComponent,
    ReactiveFormsModule,
    NgOptimizedImage,
    NotificationComponent,
    ConfirmComponent
  ],
  templateUrl: './users-view.component.html',
  styleUrl: './users-view.component.css'
})
export class UsersViewComponent {
  @ViewChild(ConfirmComponent) Confirm!: ConfirmComponent;
  @ViewChild('addForm') addForm!: ElementRef;
  @ViewChild('editForm') editForm!: ElementRef;
  @ViewChild(NotificationComponent) notificationComponent!: NotificationComponent;
  addFormGroup!: FormGroup;
  editFormGroup!: FormGroup;
  imagePreview!: string;
  imagePreviewEdit: string = "assets/images/section/default.jpg";
  userList!: any;
  page: number = 1;
  limit: number = 10;
  notification: string = '';
  fileEdit!: FileList;
  indexEdit: number = 0;
  deleteIndex: number = 0;

  constructor(private UserModel: UsersModelService) {
  }

  ngOnInit() {
    this.addFormGroup = new FormGroup({
      "name": new FormControl('', [Validators.required, Validators.minLength(6)]),
      "email": new FormControl('', [Validators.required, Validators.email]),
      "phone": new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      "address": new FormControl('', [Validators.required, Validators.minLength(10)]),
      "role": new FormControl(0),
      "password": new FormControl('', [Validators.required, Validators.minLength(6)]),
      "image": new FormControl(null),
    });
    this.editFormGroup = new FormGroup({
      'id_user': new FormControl(""),
      'name': new FormControl("3131"),
      'email': new FormControl(""),
      'phone': new FormControl(""),
      'address': new FormControl(""),
      'password': new FormControl(""),
      'role': new FormControl(0),
      'image': new FormControl(null)
    })
    this.UserModel.findUsersByPageAndLimit(this.page, this.limit)
      .then(users => {
        this.userList = users;
      })
      .catch(error => {
        console.log(error);
      })
  }

  ngAfterViewInit() {
    if (this.addForm) this.hiddenAddForm();
    if (this.editForm) this.hiddenEditForm();
  }

  protected readonly roleUser = roleUser;

  async addUser() {
    if (this.addFormGroup.get('name')?.valid && this.addFormGroup.get('email')?.valid && this.addFormGroup.get('phone')?.valid
      && this.addFormGroup.get('address')?.valid && this.addFormGroup.get('role')?.valid) {
      this.UserModel.uploadAvatar(this.addFormGroup.get('image')?.value[0])
        .then((image) => {
          const user = {
            name: this.addFormGroup.get('name')?.value,
            email: this.addFormGroup.get('email')?.value,
            phone: this.addFormGroup.get('phone')?.value,
            address: this.addFormGroup.get('address')?.value,
            role: this.addFormGroup.get('role')?.value,
            password: this.addFormGroup.get('password')?.value,
            image: image.filename
          }
          this.UserModel.createUser(user)
            .then((user) => {
              this.userList.push(user);
              this.notification = 'User Added successfully !';
              this.notificationComponent.showNotification();
              this.addFormGroup.reset();
              this.hiddenAddForm();
            })
        });
    }
  }

  editUser(index: number) {
    this.editFormGroup.get('id_user')?.setValue(this.userList[index].id_user)
    this.editFormGroup.get('name')?.setValue(this.userList[index].name)
    this.editFormGroup.get('email')?.setValue(this.userList[index].email)
    this.editFormGroup.get('phone')?.setValue(this.userList[index].phone)
    this.editFormGroup.get('address')?.setValue(this.userList[index].address)
    // this.editFormGroup.get('password')?.setValue(this.userList[index].password)
    this.editFormGroup.get('role')?.setValue(this.userList[index].role)
    this.editFormGroup.get('image')?.setValue(this.userList[index].image)
    this.imagePreviewEdit = API.image + this.userList[index].image;
    this.indexEdit = index;
    this.showEditForm();
  }

  onEditUser() {
    if (this.editFormGroup.get('name')?.valid && this.editFormGroup.get('email')?.valid && this.editFormGroup.get('phone')?.valid &&
      this.editFormGroup.get('address')?.valid && this.editFormGroup.get('role')?.valid) {
      console.log(this.fileEdit);
      if (this.fileEdit && this.fileEdit.length > 0) {
        this.UserModel.uploadAvatar(this.fileEdit[0])
          .then(image => {
            console.log(image);
            let user: {
              name: string,
              password?: string,
              email: string,
              phone: string,
              role: number,
              image: string,
              address: string
            } = {
              name: this.editFormGroup.get('name')?.value,
              email: this.editFormGroup.get('email')?.value,
              phone: this.editFormGroup.get('phone')?.value,
              address: this.editFormGroup.get('address')?.value,
              role: this.editFormGroup.get('role')?.value,
              image: image.filename
            };
            if (this.editFormGroup.get('password')?.value !== '') {
              user.password = this.editFormGroup.get('password')?.value;
            }
            this.UserModel.editUser(user, this.editFormGroup.get('id_user')?.value)
              .then(user => {
                this.userList[this.indexEdit] = user;
                this.notification = 'updated user successfully';
                this.notificationComponent.showNotification();
                this.hiddenEditForm();
              })
          })
      } else {
        const user: {
          name: string,
          password?: string,
          email: string,
          phone: string,
          role: number,
          image: string,
          address: string
        } = {
          name: this.editFormGroup.get('name')?.value,
          email: this.editFormGroup.get('email')?.value,
          phone: this.editFormGroup.get('phone')?.value,
          address: this.editFormGroup.get('address')?.value,
          role: this.editFormGroup.get('role')?.value,
          image: this.editFormGroup.get('image')?.value
        };
        if (this.editFormGroup.get('password')?.value !== '') {
          user.password = this.editFormGroup.get('password')?.value;
        }
        this.UserModel.editUser(user, this.editFormGroup.get('id_user')?.value)
          .then(user => {
            this.userList[this.indexEdit] = user;
            this.notification = 'updated user successfully';
            this.notificationComponent.showNotification();
            this.hiddenEditForm();
          })
      }
    }
  }

  removeUser(index: number) {
    this.deleteIndex = index;
    this.Confirm.show();
  }

  DeleteUser() {
    this.UserModel.removeUser(this.userList[this.deleteIndex].id_user)
      .then(() => {
        this.Confirm.hide();
        this.userList.splice(this.deleteIndex, 1);
      })
  }

  async onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      this.addFormGroup.get('image')?.setValue(inputElement.files);
    }
    this.imagePreview = await getImageUrl(this.addFormGroup.value.image[0]);
  }

  async onFileSelectedEdit(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement);
    if (inputElement.files) {
      this.fileEdit = inputElement.files;
    }
    this.imagePreviewEdit = await getImageUrl(this.fileEdit[0]);
  }


  hiddenAddForm() {
    this.addForm.nativeElement.style.display = 'none';
  }

  showAddForm() {
    this.addForm.nativeElement.style.display = 'flex';
  }

  hiddenEditForm() {
    this.editForm.nativeElement.style.display = 'none';
  }

  showEditForm() {
    this.editForm.nativeElement.style.display = 'flex';
  }

  protected readonly API = API;
}
