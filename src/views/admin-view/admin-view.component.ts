import {Component, ElementRef, ViewChild, Inject, PLATFORM_ID} from '@angular/core';
import {AdminLayoutComponent} from "../../layouts/admin-layout/admin-layout.component";
import { isPlatformBrowser } from '@angular/common';
import {Chart, registerables} from 'chart.js';

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

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const line = this.lineChart.nativeElement.getContext('2d');
      new Chart(line, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: 'My Dataset',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: '#4FD1C5',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true, // Tự động thích ứng với kích thước của phần tử chứa (mặc định: true)
          maintainAspectRatio: true, // Không giữ tỷ lệ khung nhìn (mặc định: true)
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

  OnInit(){

  }
}
