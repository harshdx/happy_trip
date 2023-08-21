import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllbusesComponent } from '../allbuses/allbuses.component';
import { CallapiService } from 'src/app/services/callapi.service';
import { generateNewTicketResponse } from 'src/app/models/generateNewTicketResponseModel';

@Component({
  selector: 'app-passengerdetails',
  templateUrl: './passengerdetails.component.html',
  styleUrls: ['./passengerdetails.component.scss']
})
export class PassengerdetailsComponent {

  allPassengerDetails:generateNewTicketResponse[] = [];

  constructor(

    public dialogRef: MatDialogRef<AllbusesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _callapi: CallapiService
  ) {
    console.log('bus id data in child', data)
    this.getPassengerDetails(data);
  }

  getPassengerDetails(busId:string){

    this._callapi.getPassengerDetailsByBusId(busId).subscribe((d)=>{
      this.allPassengerDetails = d;
      console.log('passenger details fetched', this.allPassengerDetails)
    })
  }
  closeDialog(): void {
  //   if(s==='end'){
  //     this.dialogRef.close('00');
  //   }
  //   if(s==='confirm'){
      this.dialogRef.close();
  // }
}
}
