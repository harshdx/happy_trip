import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { getAllVouchersResponse } from 'src/app/models/getAllVouchersResponseModel';
import { CallapiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-item-selection-dialog',
  templateUrl: './item-selection-dialog.component.html',
  styleUrls: ['./item-selection-dialog.component.scss']
})
export class ItemSelectionDialogComponent {

  allVouchersData: getAllVouchersResponse[] = [];
  selectVoucher: getAllVouchersResponse | undefined;
  constructor(
  
    public dialogRef: MatDialogRef<ItemSelectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _callapi: CallapiService
  ) {

    this.getAllVouchers();
  }

  closeDialog(): void {
    this.dialogRef.close(this.data.items);
  }

  getAllVouchers() {
    this._callapi.getAllVouchers().subscribe((d) => {
      this.allVouchersData = d;
      console.log('all vouchers', this.allVouchersData)
    })
  }

  selectedVoucher(voucher:getAllVouchersResponse){
    this.selectVoucher = voucher;
    this.dialogRef.close(this.selectVoucher);

  }
}
