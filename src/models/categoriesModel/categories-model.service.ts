import {Injectable} from '@angular/core';
import {API, tableName} from "../../constants";
import axios from "axios";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriesModelService {
  collection: string;
  endPoint: string;
  url: string;

  constructor(private http: HttpClient) {
    this.collection = tableName.categories;
    this.endPoint = API.server;
    this.url = this.endPoint + this.collection;
  }

  async findCategoriesByLimit(limit: number): Promise<Category[] | unknown> {
    try {
      return new Promise((resolve, reject) => {
        this.http.get(this.url + `?limit=${limit}`).subscribe((data) => {
          resolve(data as Category[]);
        })
      })
    } catch (err) {
      return err;
    }
  }

  async findAllCategories(): Promise<Category[] | unknown> {
    try {
      return new Promise((resolve, reject) => {
        this.http.get(this.url).subscribe((data) => {
          resolve(data as Category[]);
        })
      })
    } catch (err) {
      return err;
    }
  }
}
