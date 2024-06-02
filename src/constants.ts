import { InjectionToken } from '@angular/core';

export const API = {
  server: "http://localhost:3000/api/v1/",
  image: "http://localhost:3000/"
}

export const tableName = {
  products : "products",
  categories : "categories",
  users: "users"
}

export const roleUser : Record<number, string> = {
  0 : 'user',
  1 : 'admin',
}
