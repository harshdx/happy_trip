import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { getAllBusesResponse } from 'src/app/models/getAllBusesByRouteDateModel';
import { CallapiService } from 'src/app/services/callapi.service';
import { PassengerdetailsComponent } from '../passengerdetails/passengerdetails.component';

@Component({
  selector: 'app-allbuses',
  templateUrl: './allbuses.component.html',
  styleUrls: ['./allbuses.component.scss']
})
export class AllbusesComponent implements OnInit{

  getAllBusResponse: getAllBusesResponse[] = [];
  isUserAdmin:boolean= localStorage.getItem('UserAuth')==='Admin'
//   getAllBusResponse: getAllBusesResponse[] = [
//     {
//         "busId": 1,
//         "busName": "radhe travels ",
//         "source": "bhubaneshwar",
//         "destination": "tiruvanantpuram",
//         "boardingPoint": "water works",
//         "droppingPoint": "pari chowk",
//         "departureDate": "2022-04-22 00:00:00",
//         "departureTime": "2023-08-09 14:45:23",
//         "amenities": "[\"fullAc\",\"mobile charger\",\"sound proof\"]",
//         "coachType": "ac",
//         "totalAvailableSeats": "46",
//         "classAvailable": "[\"sleeper\",\"economy\",\"deluxe\"]",
//         "bookingPolicies": "[\"Tickets are refundable but the fixed amount will be deducted\",\"It is not allowed to play loud music in bus\",\"bus will be stopped on fixed stops only\"]",
//         "classWithFare": "[{\"className\":\"sleeper\",\"fare\":\"150\"},{\"className\":\"economy\",\"fare\":\"250\"},{\"className\":\"deluxe\",\"fare\":\"400\"}]"
//     },
//     {
//         "busId": 2,
//         "busName": "a",
//         "source": "agra",
//         "destination": "delhi",
//         "boardingPoint": "a",
//         "droppingPoint": "a",
//         "departureDate": "2022-04-22 00:00:00",
//         "departureTime": "2023-08-09 10:34:23",
//         "amenities": "[\"fullAc\",\"mobile charger\",\"sound proof\"]",
//         "coachType": "b",
//         "totalAvailableSeats": "b",
//         "classAvailable": "[\"sleeper\",\"economy\",\"deluxe\"]",
//         "bookingPolicies": "[\"Tickets are refundable but the fixed amount will be deducted\",\"It is not allowed to play loud music in bus\",\"bus will be stopped on fixed stops only\"]",
//         "classWithFare": "[{\"className\":\"sleeper\",\"fare\":\"150\"},{\"className\":\"economy\",\"fare\":\"250\"},{\"className\":\"deluxe\",\"fare\":\"400\"}]"
//     },
//     {
//         "busId": 3,
//         "busName": "a",
//         "source": "agra",
//         "destination": "delhi",
//         "boardingPoint": "a",
//         "droppingPoint": "a",
//         "departureDate": "2022-04-22 00:00:00",
//         "departureTime": "2023-08-09 10:34:23",
//         "amenities": "[\"fullAc\",\"mobile charger\",\"sound proof\"]",
//         "coachType": "b",
//         "totalAvailableSeats": "b",
//         "classAvailable": "[\"sleeper\",\"economy\",\"deluxe\"]",
//         "bookingPolicies": "[\"Tickets are refundable but the fixed amount will be deducted\",\"It is not allowed to play loud music in bus\",\"bus will be stopped on fixed stops only\"]",
//         "classWithFare": "[{\"className\":\"sleeper\",\"fare\":\"150\"},{\"className\":\"economy\",\"fare\":\"250\"},{\"className\":\"deluxe\",\"fare\":\"400\"}]"
//     },
//     {
//         "busId": 5,
//         "busName": "a",
//         "source": "agra",
//         "destination": "delhi",
//         "boardingPoint": "a",
//         "droppingPoint": "a",
//         "departureDate": "2022-04-22 00:00:00",
//         "departureTime": "2023-08-09 10:34:23",
//         "amenities": "[\"fullAc\",\"mobile charger\",\"sound proof\"]",
//         "coachType": "b",
//         "totalAvailableSeats": "b",
//         "classAvailable": "[\"sleeper\",\"economy\",\"deluxe\"]",
//         "bookingPolicies": "[\"Tickets are refundable but the fixed amount will be deducted\",\"It is not allowed to play loud music in bus\",\"bus will be stopped on fixed stops only\"]",
//         "classWithFare": "[{\"className\":\"sleeper\",\"fare\":\"150\"},{\"className\":\"economy\",\"fare\":\"250\"},{\"className\":\"deluxe\",\"fare\":\"400\"}]"
//     },
//     {
//         "busId": 6,
//         "busName": "a",
//         "source": "agra",
//         "destination": "delhi",
//         "boardingPoint": "a",
//         "droppingPoint": "a",
//         "departureDate": "2022-04-22 00:00:00",
//         "departureTime": "2023-08-09 10:34:23",
//         "amenities": "[\"fullAc\",\"mobile charger\",\"sound proof\"]",
//         "coachType": "b",
//         "totalAvailableSeats": "b",
//         "classAvailable": "[\"sleeper\",\"economy\",\"deluxe\"]",
//         "bookingPolicies": "[\"Tickets are refundable but the fixed amount will be deducted\",\"It is not allowed to play loud music in bus\",\"bus will be stopped on fixed stops only\"]",
//         "classWithFare": "[{\"className\":\"sleeper\",\"fare\":\"150\"},{\"className\":\"economy\",\"fare\":\"250\"},{\"className\":\"deluxe\",\"fare\":\"400\"}]"
//     },
//     {
//         "busId": 7,
//         "busName": "a",
//         "source": "agra",
//         "destination": "delhi",
//         "boardingPoint": "a",
//         "droppingPoint": "a",
//         "departureDate": "2022-04-22 00:00:00",
//         "departureTime": "2023-08-09 10:34:23",
//         "amenities": "[\"fullAc\",\"mobile charger\",\"sound proof\"]",
//         "coachType": "b",
//         "totalAvailableSeats": "b",
//         "classAvailable": "[\"sleeper\",\"economy\",\"deluxe\"]",
//         "bookingPolicies": "[\"Tickets are refundable but the fixed amount will be deducted\",\"It is not allowed to play loud music in bus\",\"bus will be stopped on fixed stops only\"]",
//         "classWithFare": "[{\"fare\":\"150\",\"className\":\"sleeper\"},{\"fare\":\"250\",\"className\":\"economy\"},{\"fare\":\"400\",\"className\":\"deluxe\"}]"
//     },
//     {
//         "busId": 8,
//         "busName": "a",
//         "source": "agra",
//         "destination": "delhi",
//         "boardingPoint": "a",
//         "droppingPoint": "a",
//         "departureDate": "2022-04-22 00:00:00",
//         "departureTime": "2023-08-09 10:34:23",
//         "amenities": "[\"fullAc\",\"mobile charger\",\"sound proof\"]",
//         "coachType": "b",
//         "totalAvailableSeats": "b",
//         "classAvailable": "[\"sleeper\",\"economy\",\"deluxe\"]",
//         "bookingPolicies": "[\"Tickets are refundable but the fixed amount will be deducted\",\"It is not allowed to play loud music in bus\",\"bus will be stopped on fixed stops only\"]",
//         "classWithFare": "[{\"fare\":\"150\",\"className\":\"sleeper\"},{\"fare\":\"250\",\"className\":\"economy\"},{\"fare\":\"400\",\"className\":\"deluxe\"}]"
//     }
// ]

  constructor(private _callapi: CallapiService, private router:Router, public dialog: MatDialog){}

  ngOnInit(): void {
    this.getAllBusResponse =  this._callapi.getAllBusResponse;
    console.log('all bus response reached allbuses component',this.getAllBusResponse )
  }

  jsonParse(stringobject:string){
    return JSON.parse(stringobject);
  }

  checkSeatAvailability(bus:getAllBusesResponse){
    console.log('selected bus is ',bus)
    this._callapi.selectedBus = bus;
    this.router.navigateByUrl('/dashboard/seatselect')
  }

  // getPassengerDetails(bus:getAllBusesResponse){
  //   console.log('getpassengerdetails called')
  //   // this.openDialog(bus.busId)
  // }

  openDialog(busId:number): void {
    console.log('bus id in open dialong', busId)
    const dialogRef = this.dialog.open(PassengerdetailsComponent, {
      width: '800px',
      data: busId
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


      //   })
      //   console.log('cancel request ', this.cancelticketrequest)
      // }
    });
  }
}
