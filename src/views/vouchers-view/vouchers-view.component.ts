import { Component } from '@angular/core';
import {AdminLayoutComponent} from "../../layouts/admin-layout/admin-layout.component";
import {VouchersModelService} from "../../models/vouchersModel/vouchers-model.service";
import {transformCurrency} from "../../helper/curency";

@Component({
  selector: 'app-vouchers-view',
  standalone: true,
  imports: [
    AdminLayoutComponent
  ],
  templateUrl: './vouchers-view.component.html',
  styleUrl: './vouchers-view.component.css'
})
export class VouchersViewComponent {
  vouchersList! : Voucher[];

  constructor(private vouchersModel : VouchersModelService) {
    this.vouchersModel.findAllVouchers()
      .then((result) => {
        this.vouchersList = result as Voucher[]
      })
  }

  protected readonly transformCurrency = transformCurrency;
}
