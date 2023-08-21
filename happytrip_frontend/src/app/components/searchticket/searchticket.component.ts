import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TicketComponent } from '../ticket/ticket.component';
import { CallapiService } from 'src/app/services/callapi.service';
import { generateNewTicketResponse } from 'src/app/models/generateNewTicketResponseModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchticket',
  templateUrl: './searchticket.component.html',
  styleUrls: ['./searchticket.component.scss']
})
export class SearchticketComponent {
  ticketId: string = '';
  ticketByTicketIdResponse!: generateNewTicketResponse;
  constructor(

    public dialogRef: MatDialogRef<TicketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _callapi: CallapiService,
    private router:Router
  ) {
    // console.log('ticket id data in child', data)
    // this.getAllVouchers();
  }

  confirmCancel() {

  }
  closeDialog(s: string): void {
    if (s === 'end') {
      this.dialogRef.close('00');
    }
    if (s === 'search') {

      this._callapi.getTicketInfByTicketId(this.ticketId).subscribe((d) => {
        this.ticketByTicketIdResponse = d;
        console.log('getTicketInfByTicketId response', this.ticketByTicketIdResponse);
        this._callapi.generateTicketResponse = this.ticketByTicketIdResponse;
    
        const trimmedString = this.ticketByTicketIdResponse.seatsBooked.slice(1, -1); // Remove the brackets at the beginning and end
        const stringArray = trimmedString.split(',');
        this._callapi.ticketsQuantity = stringArray.length;
        this.router.navigateByUrl('/dashboard/ticket')
      })
      this.dialogRef.close(this.ticketId);
    }
  }
}
