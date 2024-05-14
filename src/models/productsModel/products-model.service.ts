import {Injectable} from '@angular/core';
import {API, tableName} from "../../constants";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class ProductsModelService {
  collection: string;
  endPoint: string;
  url: string;

  constructor() {
    this.collection = tableName.products;
    this.endPoint = API.server;
    this.url = this.endPoint + this.collection;
  }

  async findProductsByCategoryAndPage(idCategory: number, page: number, limit: number = 6): Promise<Product[]> {
    let offset = (page - 1) * limit;
    const res = await axios.get(this.url + `?id_category=${idCategory}&offset=${offset}&limit=${limit}`)
    return res.data;
  }
}
