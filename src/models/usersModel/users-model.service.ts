import {Injectable} from '@angular/core';
import {API, tableName} from "../../constants";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersModelService {
  collection: string;
  endPoint: string;
  url: string;

  constructor(private http: HttpClient) {
    this.collection = tableName.users;
    this.endPoint = API.server;
    this.url = this.endPoint + this.collection;
  }

  SignIn(data: {}) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/sign_in', data).subscribe(
        (response) => {
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
      },(err) => reject(err))
    })
  }

}
