import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { addNewUserRequest } from 'src/app/models/addNewUserRequestModel';
import { getAllVouchersResponse } from 'src/app/models/getAllVouchersResponseModel';
import { seatsDataResponse } from 'src/app/models/seatsDataResponseModel';
import { CallapiService } from 'src/app/services/callapi.service';
import { ItemSelectionDialogComponent } from '../item-selection-dialog/item-selection-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'
import { generateNewTicketRequest } from 'src/app/models/generateNewTicketRequestModel';
import { getAllBusesResponse } from 'src/app/models/getAllBusesByRouteDateModel';
import { generateNewTicketResponse } from 'src/app/models/generateNewTicketResponseModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinf',
  templateUrl: './userinf.component.html',
  styleUrls: ['./userinf.component.scss']
})
export class UserinfComponent {

  selectedSeatsByUser: seatsDataResponse[] = [];
  selectedBusSeatsData: seatsDataResponse[] = [];
  selectedSeatsByUserFareTotal: number = 0;
  selectedSeatsDiscountedPrice: number = 0;
  finalPriceAfterDiscount: number = 0;
  selectVoucher: getAllVouchersResponse | undefined;
  isDiscountTaken: boolean = false;
  selectedBusId: any;
  selectedBus: getAllBusesResponse | undefined;
  generateTicketResponse!: generateNewTicketResponse;

  generateTicketRequest: generateNewTicketRequest = {
    busId: 0,
    busName: '',
    source: '',
    destination: '',
    boardingPoint: '',
    droppingPoint: '',
    departureDate: '',
    departureTime: '',
    coachType: '',
    userId: '',
    userName: '',
    emailId: '',
    phoneNumber: '',
    seatsBooked: [],
    totalAmountPaid: ''
  }


  // allVouchersData: getAllVouchersResponse[] = [];

  userInformation: addNewUserRequest = {
    userName: '',
    emailId: '',
    phoneNumber: ''
  };

  userIdCreated: string = '';

  constructor(private _callapi: CallapiService, public dialog: MatDialog, private _snackbar: MatSnackBar, private router:Router) {
    this.selectedSeatsByUser = this._callapi.selectedSeatsByUser;
    console.log('selected seats in userinf', this.selectedSeatsByUser)
    this.selectedSeatsByUserFareTotal = this._callapi.selectedSeatsByUserFareTotal;
    this.selectedBusSeatsData = this._callapi.selectedBusSeatsData;
    console.log('selected selectedBusSeatsData in userinf', this.selectedBusSeatsData)
    this.selectedBusId = this._callapi.selectedBusId;
    this.selectedBus = this._callapi.selectedBus;

  }

  submitInfo() {
    console.log('user inf submitted', this.userInformation)
    this._callapi.addNewUser(this.userInformation).subscribe((d) => {
      this.userIdCreated = d.userId.toString();
      console.log('user is created', this.userIdCreated);

      let selectedSeatNumbers: string[] = [];
      let selectedSeats: string[] = [];
      for (let index = 0; index < this.selectedSeatsByUser.length; index++) {
        let element = this.selectedSeatsByUser[index];
        selectedSeatNumbers.push(element.seatNo);
        selectedSeats.push(element.seatNo);

      }

      for (let indexouter = 0; indexouter < this.selectedBusSeatsData.length; indexouter++) {
        const elementouter = this.selectedBusSeatsData[indexouter];
        for (let indexinner = 0; indexinner < selectedSeatNumbers.length; indexinner++) {
          const elementinner = selectedSeatNumbers[indexinner];
          if (elementouter.seatNo === elementinner) {
            this.selectedBusSeatsData[indexouter].seatNo = elementinner;
            this.selectedBusSeatsData[indexouter].email = this.userInformation.emailId;
            this.selectedBusSeatsData[indexouter].userName = this.userInformation.userName;
            this.selectedBusSeatsData[indexouter].phoneNo = this.userInformation.phoneNumber;
            this.selectedBusSeatsData[indexouter].status = 'reserved';
            const idx = selectedSeatNumbers.indexOf(elementinner);
            selectedSeatNumbers.splice(idx, 1);
            break;
          }
        }
      }

      console.log('selected seats after in userinf', this.selectedSeatsByUser)
      console.log('selected selectedBusSeatsData after in userinf', this.selectedBusSeatsData)
      this._callapi.updateSeatsDataByBusId(this.selectedBusId, this.selectedBusSeatsData).subscribe((d) => {
        console.log('is the seats data submitted', d);

        //ticket generation
        this.generateTicketRequest.busId = this.selectedBusId;
        if (this.selectedBus) {
          this.generateTicketRequest.busName = this.selectedBus?.busName;
          this.generateTicketRequest.source = this.selectedBus?.source;
          this.generateTicketRequest.destination = this.selectedBus?.destination;
          this.generateTicketRequest.boardingPoint = this.selectedBus?.boardingPoint;
          this.generateTicketRequest.droppingPoint = this.selectedBus?.droppingPoint;
          this.generateTicketRequest.departureDate = this.selectedBus?.departureDate;
          this.generateTicketRequest.departureTime = this.selectedBus?.departureTime;
          this.generateTicketRequest.coachType = this.selectedBus?.coachType;

        }
        this.generateTicketRequest.userId = this.userIdCreated;
        this.generateTicketRequest.userName = this.userInformation.userName;
        this.generateTicketRequest.emailId = this.userInformation.emailId;
        this.generateTicketRequest.phoneNumber = this.userInformation.phoneNumber;
        this.generateTicketRequest.seatsBooked = selectedSeats;
        if (this.isDiscountTaken) {
          this.generateTicketRequest.totalAmountPaid = this.finalPriceAfterDiscount.toString();
        }
        else {
          this.generateTicketRequest.totalAmountPaid = this.selectedSeatsByUserFareTotal.toString();
        }
        this._callapi.generateNewTicket(this.generateTicketRequest).subscribe((d) => {
          this.generateTicketResponse = d;
          this._callapi.generateTicketResponse = this.generateTicketResponse;
          this._callapi.ticketsQuantity =  selectedSeats.length;
          console.log('ticket id generated', d.ticketId);

          this.router.navigateByUrl('/dashboard/ticket')
        })
      })

    })
  }

  // getAllVouchers() {
  //   this._callapi.getAllVouchers().subscribe((d) => {
  //     this.allVouchersData = d;
  //     console.log('all vouchers', this.allVouchersData)
  //   })
  // }

  openDialog(): void {
    const dialogRef = this.dialog.open(ItemSelectionDialogComponent, {
      width: '400px'

    });

    dialogRef.afterClosed().subscribe(selectedItems => {
      console.log('selected item is', selectedItems)
      this.selectVoucher = selectedItems;
      console.log('selected voucher is ', this.selectVoucher);
      if (this.selectVoucher) {
        if (this.selectedSeatsByUserFareTotal <= Number.parseInt(this.selectVoucher.minimumAmount)) {
          this._snackbar.open("This voucher is not applicable!", '',
            {
              duration: 3000,
              verticalPosition: 'bottom',
              horizontalPosition: 'right'
            }
          )
        }
        else {
          this.isDiscountTaken = true;
          Swal.fire('Success', 'COUPON ' + this.selectVoucher.voucherCode + ' Applied Successfully!', 'success')

          this.selectedSeatsDiscountedPrice = (this.selectedSeatsByUserFareTotal * Number.parseInt(this.selectVoucher.discountPercent)) / 100
          this.finalPriceAfterDiscount = this.selectedSeatsByUserFareTotal - this.selectedSeatsDiscountedPrice;
        }

      }
      // Do something with selected items
    });
  }


}