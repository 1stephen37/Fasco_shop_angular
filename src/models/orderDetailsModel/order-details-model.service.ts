import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DOCUMENT} from "@angular/common";
import {API, tableName} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsModelService {
  collection: string;
  endPoint: string;
  url: string;

  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) {
    this.collection = tableName.order_details;
    this.endPoint = API.server;
    this.url = this.endPoint + this.collection;
  }

  createOrderDetail(data : {}, token : string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/add', data, {headers} ).subscribe((res) => {
        resolve(res);
      });
    })
  }
}
