import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { addNewVoucherRequest } from 'src/app/models/addNewVoucherRequestModel';
import { addNewVoucherResponse } from 'src/app/models/addNewVoucherResponseModel';
import { CallapiService } from 'src/app/services/callapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addnewvoucher',
  templateUrl: './addnewvoucher.component.html',
  styleUrls: ['./addnewvoucher.component.scss']
})
export class AddnewvoucherComponent {
  constructor(private _callapi: CallapiService, private datePipe: DatePipe) { }

  addNewVoucherResponse!: addNewVoucherResponse;
  addNewVoucherRequest: addNewVoucherRequest = {
    voucherStartDate: this.getRealTimeDateTime(),
    voucherEndDate: '',
    voucherStatus: 'Active',
    voucherAmount: '',
    voucherCode: '',
    minimumAmount: '',
    discountPercent: ''
  }
  getRealTimeDateTime(): any {
    const currentDate = new Date();
    const formattedDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd HH:mm:ss');
    return formattedDate
  }

  submitVoucher() {

    console.log('voucher is submitted', this.addNewVoucherRequest)
    this._callapi.addNewVoucher(this.addNewVoucherRequest).subscribe((d) => {
      Swal.fire('Success', 'New Voucher has been added', 'success');
      console.log('response from addNewVoucher', d)
    }, (e) => {
      Swal.fire('Failure', 'Something went Wrong!', 'error');

    })
  }
}
