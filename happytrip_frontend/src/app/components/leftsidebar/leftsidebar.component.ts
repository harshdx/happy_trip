import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchticketComponent } from '../searchticket/searchticket.component';
import { CallapiService } from 'src/app/services/callapi.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss']
})
export class LeftsidebarComponent implements OnInit{

  // value:any = localStorage.getItem('UserAuth')==='Admin';

  // isUserAdmin:any= new BehaviorSubject<any>(this.value);
  constructor(public dialog: MatDialog, private _callapi:CallapiService){
    // console.log(this.isUserAdmin);
    // console.log(this.isUserAdmin.value)
  }

  isUserAdmin:boolean= localStorage.getItem('UserAuth')==='Admin'

  ngOnInit(): void {
   

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SearchticketComponent, {
      width: '400px',
      // data: this.ticketResponse.ticketId
    });

    dialogRef.afterClosed().subscribe(selectedItems => {
      console.log('selected item is', selectedItems)
      //cancel ticket
      // if (selectedItems !== '00') {
      //   const trimmedString = this.ticketResponse.seatsBooked.slice(1, -1); // Remove the brackets at the beginning and end
      //   const stringArray = trimmedString.split(',');
      //   this.cancelticketrequest.busId = this.ticketResponse.busId;
      //   this.cancelticketrequest.ticketId = this.ticketResponse.ticketId;
      //   this.cancelticketrequest.bookedSeats = stringArray;

      //   this._callapi.cancelTicket(this.cancelticketrequest).subscribe((d) => {
      //     this.cancelticketresponse = d;
      //     console.log('cancelticketresponse ', this.cancelticketresponse);
      //     this.isTicketCancelled = true;
      //     this.cancellationRefundAmount = this.cancelticketresponse.refundedAmount;
      //     this.cancellationDate = this.cancelticketresponse.cancelationDate;


        })
        // console.log('cancel request ', this.cancelticketrequest)
      }
}
