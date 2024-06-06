import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API, tableName} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class ShopModelService {
  collection: string;
  endPoint: string;
  url: string;

  constructor(private http: HttpClient) {
    this.collection = tableName.shop;
    this.endPoint = API.server;
    this.url = this.endPoint + this.collection;
  }

  findShopInformation() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url)
        .subscribe((response) => {
          console.log(response);
        })
    })
  }

}
