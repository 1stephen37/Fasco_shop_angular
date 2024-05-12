import {Injectable} from '@angular/core';
import {API, tableName} from "../../constants";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class CategoriesModelService {
  collection : string;
  endPoint : string;
  url: string;
  constructor() {
    this.collection = tableName.categories;
    this.endPoint = API.server;
    this.url = this.endPoint + this.collection;
  }

  async findCategoriesLimit(limit: number) : Promise<Category[]> {
    const res = await axios.get(this.url + `?limit=${limit}`)
    return res.data;
  }
}
