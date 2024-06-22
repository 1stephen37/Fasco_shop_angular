import { InjectionToken } from '@angular/core';

export const API = {
  server: "http://localhost:3000/api/v1/",
  image: "http://localhost:3000/images/uploads/"
}

export const tableName = {
  products : "products",
  categories : "categories",
  users: "users",
  wrap: 'wrap',
  shop: 'shop',
  vouchers: 'vouchers',
  deliveries: 'deliveries',
  reviews: "reviews",
  orders: 'orders',
  order_details: "order_details"
}

export const roleUser : Record<number, string> = {
  0 : 'user',
  1 : 'admin',
}

export const roleUserReverse : Record<string, number> = {
  'user' : 0,
  'admin' : 1,
}

export const orderStatus: Record<number, string> = {
  0: 'Đang chờ xử lý', // Đơn hàng mới đặt, chưa được xử lý
  1: 'Đã xác nhận', // Đơn hàng đã được xác nhận và đang được chuẩn bị
  2: 'Đang giao', // Đơn hàng đã được vận chuyển
  3: 'Đã giao', // Đơn hàng đã được giao thành công
  4: 'Đã hủy', // Đơn hàng đã bị hủy
  5: 'Đã trả lại', // Đơn hàng đã được gửi trả lại
};

export const deliveryStatus: Record<number, string> = {
  0: 'Ngưng hoạt động', // Đơn hàng mới đặt, chưa được xử lý
  1: 'Đang hoạt động', // Đơn hàng đã được xác nhận và đang được chuẩn bị
  2: 'Tạm ngưng hoạt động', // Đơn hàng đã được xác nhận và đang được chuẩn bị
};

export const orderStatusReverse : Record<number, string> = {
  0 : 'user',
  1 : 'admin',
}
