import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DOCUMENT} from "@angular/common";
import {API, tableName} from "../../constants";
import {response} from "express";

@Injectable({
  providedIn: 'root'
})
export class OrderModelService {
  collection: string;
  endPoint: string;
  url: string;

  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) {
    this.collection = tableName.orders;
    this.endPoint = API.server;
    this.url = this.endPoint + this.collection;
  }

  createOrder(data : {}, token : string) : Promise<Order> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return new Promise((resolve, reject) => {
      this.http.post(this.url + '/add', data, {headers} ).subscribe((res) => {
        resolve(res as Order);
      });
    })
  }

  findOrderByIdUser(id_user : string) : Promise<Order[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + `?idUser=${id_user}`)
        .subscribe((response) => {
          resolve(response as Order[]);
        })
    })
  }

}
