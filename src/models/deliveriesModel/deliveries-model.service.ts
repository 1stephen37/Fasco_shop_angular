import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DOCUMENT} from "@angular/common";
import {API, tableName} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class DeliveriesModelService {
  collection: string;
  endPoint: string;
  url: string;

  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) {
    this.collection = tableName.deliveries;
    this.endPoint = API.server;
    this.url = this.endPoint + this.collection;
  }

  findALlDeliveries () {
    return new Promise((resolve, reject) => {
      this.http.get(this.url)
        .subscribe((response) => {
          resolve(response)
      })
    })
  }

  findDeliveriesByPage(page: number, limit : number) {
    const offset = (page - 1) * limit;
    return new Promise((resolve, reject) => {
      this.http.get(this.url + `?offset=${offset}&limit=${limit}`)
        .pipe()
        .subscribe((response) => {
          resolve(response)
        })
    })
  }

}
