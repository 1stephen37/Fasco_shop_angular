import { InjectionToken } from '@angular/core';

export const API = {
  server: "http://localhost:3000/"
}

export const tableName = {
  products : "products",
  categories : "categories"
}


export const endpoint = new InjectionToken<string>('endpoint');
export const categories = new InjectionToken<string>('categories');
