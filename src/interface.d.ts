
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
  category_name: string;
}

interface Cart {
  id_product : string;
  name : string;
  price: number;
  sale_off: number;
  stock: number;
  quantity: number;
  color: string;
  image: string;
  size: string;
}

interface Wrap{
  id_wrap: string,
  price: number,
  createdAt: string,
  updatedAt: string
}

interface User {
  id_user: string
  name : string;
  email : string;
  phone : string;
  address : string;
  role: number
}

interface Delivery {
  id_delivery: string;
  name : string;
  price: number;
  speed : string;
  status: number;
  createdAt: string;
}

interface Voucher {
  id_voucher: string;
  code: string;
  discount: number;
  max_discount: number;
  min_amount: number;
  is_percent: number;
  end_date: string;
  expired: number;
  createdAt: string;
  updatedAt: string;
}

interface Review {
  id_review: string;
  id_user : string;
  id_product: string;
  name_user: string;
  image_user: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface Order {
  id_order: string;
  id_delivery: string;
  id_user : string;
  voucher_code: string;
  email : string;
  phone: string;
  name: string;
  distance: number;
  ship_fee: number;
  total : number;
  createdAt: string;
  updatedAt: string;
  address: string;
  status: number
}
