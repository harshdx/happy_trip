import { Component } from '@angular/core';
import { getAllBusesRequest } from 'src/app/models/getAllBusesRequestModel';
import { CallapiService } from 'src/app/services/callapi.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private _callapi:CallapiService, private _snackbar:MatSnackBar, private route:Router){

  }

  getallbusespayload:getAllBusesRequest= {
    source: '',
    destination: '',
    departureDate: ''
  }
  getAllBusesSubmit(){
    console.log('Form is submitted clicked')
    console.log('imf gethered ', this.getallbusespayload)
    this._callapi.getAllBusesUsingRouteAndDate(this.getallbusespayload).subscribe((d)=>{
      console.log('all bus response in home',d)
      this._callapi.getAllBusResponse =d;
      this.route.navigateByUrl('/dashboard/allbuses')
      this._snackbar.open('All bus data fetched','',{
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:'bottom'
      })
    })

  }

}
