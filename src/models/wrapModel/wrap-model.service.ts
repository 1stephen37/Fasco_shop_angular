import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API, tableName} from "../../constants";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WrapModelService {
  collection: string;
  endPoint: string;
  url: string;

  constructor(private http: HttpClient) {
    this.collection = tableName.wrap;
    this.endPoint = API.server;
    this.url = this.endPoint + this.collection;
  }

  findWrap(): Promise<Wrap> {
    return new Promise((resolve, reject) => {
      this.http.get<Wrap>(this.url)
        .pipe(catchError((err) => {
          console.error(err);
          return throwError(err);
        }))
        .subscribe((response) => {
          resolve(response);
        })
    })
  }

}
