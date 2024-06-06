import {Injectable} from '@angular/core';
import {API, tableName} from "../../constants";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsModelService {
  collection: string;
  endPoint: string;
  url: string;

  constructor(private http: HttpClient) {
    this.collection = tableName.products;
    this.endPoint = API.server;
    this.url = this.endPoint + this.collection;
  }

  findProductsByCategoryAndPage(idCategory: number, page: number, limit: number = 6, sortBy?: string, sort?: string): Promise<{
    paging: {
      page: number,
      fullProductOfCategory: number
    },
    data: Product[]
  }> {
    let offset = (page - 1) * limit;
    return new Promise((resolve, reject) => {
      this.http.get<{
        paging: {
          page: number,
          fullProductOfCategory: number
        },
        data: Product[]
      }>(this.url + `?idCategory=${idCategory}&offset=${offset}&limit=${limit}&${sortBy ? `sortBy=${sortBy}` : ''}&${sortBy ? `sort=${sort}` : ''}`).subscribe(
        (data) => {
          resolve({
            paging: data.paging,
            data: data.data
          });
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

  findProductById(id: string): Promise<Product> {
    return new Promise((resolve, reject) => {
      this.http.get<Product>(this.url + `/${id}`).subscribe((response) => {
        resolve(response)
      })
    })
  }
}
