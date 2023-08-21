import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TicketComponent } from '../ticket/ticket.component';
import { CallapiService } from 'src/app/services/callapi.service';
@Component({
  selector: 'app-cancelticket',
  templateUrl: './cancelticket.component.html',
  styleUrls: ['./cancelticket.component.scss']
})
export class CancelticketComponent {

  ticketId:string= '';
  constructor(

    public dialogRef: MatDialogRef<TicketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _callapi: CallapiService
  ) {
    console.log('ticket id data in child', data)
    // this.getAllVouchers();
  }

  confirmCancel(){

  }
  closeDialog(s:string): void {
    if(s==='end'){
      this.dialogRef.close('00');
    }
    if(s==='confirm'){
      this.dialogRef.close(this.ticketId);
  }
}
}