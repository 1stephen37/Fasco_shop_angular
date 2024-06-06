import {Inject, Injectable} from '@angular/core';
import {API, tableName} from "../../constants";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class UsersModelService {
  collection: string;
  endPoint: string;
  url: string;

  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) {
    this.collection = tableName.users;
    this.endPoint = API.server;
    this.url = this.endPoint + this.collection;
  }

  checkLogin(): boolean {
    return JSON.parse(localStorage.getItem('isLogin') as string) || false;
  }

  checkAdmin() : boolean {
    return JSON.parse(localStorage.getItem('user') as string).isAdmin || false;
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') as string);
  }

  SignIn(data: {}) : Promise<{
    token: string,
    id_user: string,
    isAdmin: boolean
  }> {
    return new Promise((resolve, reject) => {
      this.http.post<{
        token: string,
        id_user: string,
        isAdmin: boolean
      }>(this.url + '/sign_in', data).subscribe(
        (response) => {
          console.log(response)
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  SignUp(user : {}) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/sign_up', user).subscribe(
        (response) => {
          console.log(response)
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  findUsersByPageAndLimit(page: number, limit: number) {
    const start = (page - 1) * limit;
    return new Promise((resolve, reject) => {
      this.http.get(this.url + `?offset=${start}&limit=${limit}`).subscribe((response) => {
        resolve(response);
      }, (err) => reject(err))
    })
  }

  findUserById(id: string, token : string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return new Promise((resolve, reject) => {
      this.http.get<User>(this.url + `/${id}`, {headers})
        .pipe()
        .subscribe((response) => {
          resolve(response);
        })
    })
  }

  createUser(data : {}) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getUser().token}`);
    return new Promise((resolve, reject) => {
      this.http.post<User>(this.url + `/add`, data,{headers})
        .pipe()
        .subscribe((response) => {
          resolve(response);
        })
    })
  }

  editUser(data : {}, id_user : string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getUser().token}`);
    return new Promise((resolve, reject) => {
      this.http.patch<User>(this.url + `/edit/${id_user}`, data,{headers})
        .pipe()
        .subscribe((response) => {
          resolve(response);
        })
    })
  }

  removeUser(id_user : string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getUser().token}`);
    return new Promise((resolve, reject) => {
      this.http.delete(this.url + `/delete/${id_user}`)
        .pipe()
        .subscribe((response) => {
          resolve(response);
        })
    })
  }

  uploadAvatar(file: File) : Promise<{filename: string}> {
    const formData = new FormData();
    formData.append('files', file);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getUser().token}`);
    return new Promise((resolve, reject) => {
      this.http.post<{filename: string}>(this.url + '/upload', formData, {headers}).subscribe((data) => {
        resolve(data);
      })
    })
  }

  checkEmail(email : string) : Promise<User> {
    return new Promise((resolve, reject) => {
      this.http.post<User>(this.url + '/check-email', {email})
        .pipe()
        .subscribe((response) => {
          resolve(response);
        })
    })
  }

  resetPassword(data : {}) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/reset-password', data)
        .pipe()
        .subscribe((response) => {
          resolve(response);
        })
    })
  }
}
