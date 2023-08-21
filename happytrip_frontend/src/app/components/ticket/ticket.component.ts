import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { generateNewTicketResponse } from 'src/app/models/generateNewTicketResponseModel';
import { CallapiService } from 'src/app/services/callapi.service';
import { CancelticketComponent } from '../cancelticket/cancelticket.component';
import { cancelTicketRequest } from 'src/app/models/cancelTicketRequestModel';
import { cancelTicketResponse } from 'src/app/models/cancelTicketResponseModel';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {

  cancelticketrequest: cancelTicketRequest = {
    busId: '',
    ticketId: '',
    bookedSeats: []
  };
  cancellationDate: string = '';
  cancellationRefundAmount = '';
  isTicketCancelled: boolean = false;

  cancelticketresponse!: cancelTicketResponse;
  ticketResponse!: generateNewTicketResponse;
  ticketsQuantity: number = 0;
  // ticketResponse: generateNewTicketResponse = {
  //   "ticketId": "N2BD4vWM",
  //   "busName": "royale bus",
  //   "source": "agra",
  //   "destination": "delhi",
  //   "boardingPoint": "water works",
  //   "droppingPoint": "kashmiri gate",
  //   "departureDate": "2022-04-22 00:00:00",
  //   "departureTime": "2022-04-22 14:20:53",
  //   "coachType": "AC",
  //   "userId": "123",
  //   "userName": "mohan",
  //   "emailId": "mohan@gmail.com",
  //   "phoneNumber": "88888888",
  //   "ticketStatus": "Active",
  //   "cancellationDate": null,
  //   "refundedAmount": null,
  //   "busId": "7",
  //   "seatsBooked": "[E1, E2, E3]",
  //   "createdDate": "2023-08-15T07:42:56.744+00:00",
  //   "totalAmountPaid": "1200"
  // }
  constructor(private _callapi: CallapiService, public dialog: MatDialog) {
    this.ticketResponse = this._callapi.generateTicketResponse;
    console.log('ticket response in ticket', this.ticketResponse)
    if (this._callapi.generateTicketResponse) {
      this.isTicketCancelled = this._callapi.generateTicketResponse.ticketStatus === 'Active' ? false : true;
      if (this.isTicketCancelled) {
        this.cancellationDate = this._callapi.generateTicketResponse.cancellationDate;
        this.cancellationRefundAmount = this._callapi.generateTicketResponse.refundedAmount;
      }
    }
    this.ticketsQuantity = this._callapi.ticketsQuantity
    console.log('tickets qty in ticket', this.ticketsQuantity)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CancelticketComponent, {
      width: '400px',
      data: this.ticketResponse.ticketId
    });

    dialogRef.afterClosed().subscribe(selectedItems => {
      console.log('selected item is', selectedItems)
      //cancel ticket
      if (selectedItems !== '00') {
        const trimmedString = this.ticketResponse.seatsBooked.slice(1, -1); // Remove the brackets at the beginning and end
        const stringArray = trimmedString.split(',');
        this.cancelticketrequest.busId = this.ticketResponse.busId;
        this.cancelticketrequest.ticketId = this.ticketResponse.ticketId;
        this.cancelticketrequest.bookedSeats = stringArray;

        this._callapi.cancelTicket(this.cancelticketrequest).subscribe((d) => {
          this.cancelticketresponse = d;
          console.log('cancelticketresponse ', this.cancelticketresponse);
          this.isTicketCancelled = true;
          this.cancellationRefundAmount = this.cancelticketresponse.refundedAmount;
          this.cancellationDate = this.cancelticketresponse.cancelationDate;


        })
        console.log('cancel request ', this.cancelticketrequest)
      }
    });
  }
}
