import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API, tableName} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class ReviewsModelService {
  collection: string;
  endPoint: string;
  url: string;

  constructor(private http: HttpClient) {
    this.collection = tableName.reviews;
    this.endPoint = API.server;
    this.url = this.endPoint + this.collection;
  }

  findAllReviewsByIdProduct(idProduct : string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + `?idProduct=${idProduct}`)
        .pipe()
        .subscribe((response) => {
          resolve(response);
        })
    })
  }

  createReview(data : any, token : string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/add', data, { headers })
        .subscribe((response) => {
          resolve(response);
        })
    })
  }
}
