import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DOCUMENT} from "@angular/common";
import {API, tableName} from "../../constants";
import {response} from "express";

@Injectable({
  providedIn: 'root'
})
export class VouchersModelService {
  collection: string;
  endPoint: string;
  url: string;

  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) {
    this.collection = tableName.vouchers;
    this.endPoint = API.server;
    this.url = this.endPoint + this.collection;
  }

  findVouchersByAmount(amount: number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + `?amount=${amount}`)
        .subscribe(response => {
          resolve(response)
        })
    })
  }

  findAllVouchers() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url)
        .subscribe(response => {
          resolve(response)
        })
    })
  }
}
