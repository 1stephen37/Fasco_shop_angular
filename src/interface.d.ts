
interface Category {
  id_category: string;
  name : string;
  createdAt: string;
  updatedAt: string;
}

interface Product {
  id_product: string;
  id_category: string;
  name: string;
  image: string;
  designer: string;
  review: number;
  color: string;
  sale_off: number;
  status: number;
  createdAt: string | Date;
  updatedAt: string | Date;
  properties : {
    size : string;
    quantity : number;
    price : number;
  }[];
  images : string[];
}

interface User {

}

interface User {

}

