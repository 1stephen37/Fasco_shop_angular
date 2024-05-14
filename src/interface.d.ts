
interface Category {
  id_category: string;
  name : string;
  createdAt: string;
  updatedAt: string;
}

interface Product {
  id_product: number;
  id_category: number;
  id_sale: number;
  name: string;
  image: string;
  designer: string;
  review: number;
  quantity: number;
  color: string;
  sale: number;
  status: number;
  createdAt: string | Date;
  updatedAt: string | Date;
  properties : {
    size? : string;
    price? : number;
  }[];
  images : string[];
}
