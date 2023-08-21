import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { getAllBusesResponse } from 'src/app/models/getAllBusesByRouteDateModel';
import { seatsDataResponse } from 'src/app/models/seatsDataResponseModel';
import { CallapiService } from 'src/app/services/callapi.service';

@Component({
  selector: 'app-seatselect',
  templateUrl: './seatselect.component.html',
  styleUrls: ['./seatselect.component.scss']
})
export class SeatselectComponent implements OnInit{

  selectedBus: getAllBusesResponse | undefined;
  selectedBusId:any;
  selectedBusSeatsData:seatsDataResponse[]= [];
  selectedSeatsByUser: seatsDataResponse[]= [];
  selectedSeatsByUserFareTotal:number=0;
  

  constructor(private _callapi: CallapiService,  private _snackbar:MatSnackBar, private route:Router){
    this.selectedBus =  this._callapi.selectedBus;
    console.log('selected bus in selectbus',this.selectedBus)
    this.selectedBusId = this.selectedBus?.busId;
    this._callapi.selectedBusId = this.selectedBusId;
    this._callapi.getSeatsDataByBusId(this.selectedBusId).subscribe((d)=>{
      console.log('selected bus seats data',d);
      this.selectedBusSeatsData = JSON.parse(d.seatsData);
      this._callapi.selectedBusSeatsData = this.selectedBusSeatsData;
      this._snackbar.open('Seats data fetched successfully','',{
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:'bottom'
      })
      console.log('selected bus seats data only',this.selectedBusSeatsData);

    }, (e)=>{
      this._snackbar.open('Seats data not found','',{
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:'bottom'
      })
    })
  }
 

  ngOnInit(): void {
 

  }

  addSeat(seat:seatsDataResponse){
    this.selectedSeatsByUserFareTotal= 0;
    console.log('selected seat is',seat)
    this.selectedSeatsByUser.push(seat);
      this.selectedSeatsByUser.forEach((s)=>{
        this.selectedSeatsByUserFareTotal = this.selectedSeatsByUserFareTotal + Number.parseInt(s.fare);
    })

    this._callapi.selectedSeatsByUser = this.selectedSeatsByUser;
    this._callapi.selectedSeatsByUserFareTotal = this.selectedSeatsByUserFareTotal;
  }

  poceedToUserInf(){
    this.route.navigateByUrl('/dashboard/userinf')
  }
}
