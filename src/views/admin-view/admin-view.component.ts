import {Component, ElementRef, ViewChild, Inject, PLATFORM_ID} from '@angular/core';
import {AdminLayoutComponent} from "../../layouts/admin-layout/admin-layout.component";
import { isPlatformBrowser } from '@angular/common';
import {Chart, registerables} from 'chart.js';
import {UsersModelService} from "../../models/usersModel/users-model.service";
import {OrderModelService} from "../../models/ordersModel/order-model.service";
import {transformCurrency} from "../../helper/curency";
import {ProductsModelService} from "../../models/productsModel/products-model.service";

Chart.register(...registerables);

@Component({
  selector: 'app-admin-view',
  standalone: true,
  imports: [
    AdminLayoutComponent
  ],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.css'
})
export class AdminViewComponent {
  @ViewChild('lineChart') lineChart! : ElementRef;
  @ViewChild('pieChart') pieChart! : ElementRef;
  Admin!: User;
  usersLength: number = 0;
  totalIncome: number = 0;
  totalProducts: number = 0;
  totalOrdersIncome: number = 0;
  totalOrders: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: object, private UsersModel: UsersModelService, private OrdersModel : OrderModelService,
              private productsModel: ProductsModelService) {
    if(isPlatformBrowser(platformId)) {
      const user = this.UsersModel.getUser();
      this.UsersModel.statistics(user.token)
        .then((data) => {
          this.usersLength = data.allUsers;
        });
      this.OrdersModel.statistics(user.token)
        .then((data) => {
          this.totalOrders = data.totalOrders;
          this.totalOrdersIncome = data.totalIncome;
        })
      this.productsModel.statistics(user.token)
        .then((data) => {
          this.totalProducts = data.totalProducts;
        })
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const line = this.lineChart.nativeElement.getContext('2d');
      new Chart(line, {
        type: 'bar',
        data: {
          labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
          datasets: [{
            label: 'Doanh thu',
            data: [60000000, 150000, 120000, 180000, 200000, 220000, 190000, 160000, 170000, 210000, 250000, 2800000, 2000000],
            backgroundColor: '#4FD1C5',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            y: {
              type: 'linear', // Sử dụng scaling linear
              beginAtZero: false, // Không bắt đầu từ 0
              min: 0, // Giá trị tối thiểu trên cột dọc
              max: 50000000, // Giá trị tối đa trên cột dọc
              ticks: {
                stepSize: 5000000, // Khoảng cách giữa các tick là 500,000
                callback: function(value) { // Tùy chỉnh hiển thị giá trị trên cột dọc
                  return value.toLocaleString('vi-VN') + ' đ';
                }
              }
            }
          }
        }
      });
      const pie = this.pieChart.nativeElement.getContext('2d');
      new Chart(pie, {
        type: 'pie', // Loại biểu đồ (ví dụ: bar, line, pie, ...)
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: 'My Dataset',
            data: [10, 2, 5, 3, 3, 3],
            backgroundColor: '#4FD1C5',
            borderColor: 'rgba(150, 100, 200, 0.5)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true, // Tự động thích ứng với kích thước của phần tử chứa (mặc định: true)
          maintainAspectRatio: true, // Không giữ tỷ lệ khung nhìn (mặc định: true)
        }
      });
    }
  }

  protected readonly transformCurrency = transformCurrency;
}
