import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClassWithFare, addNewBusRequest } from 'src/app/models/addNewBusRequestModel';
import { addNewBusResponse } from 'src/app/models/addNewBusResponseModel';
import { seatsDataResponse } from 'src/app/models/seatsDataResponseModel';
import { CallapiService } from 'src/app/services/callapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addnewbus',
  templateUrl: './addnewbus.component.html',
  styleUrls: ['./addnewbus.component.scss']
})
export class AddnewbusComponent {
  constructor(private _callapi: CallapiService, private datePipe: DatePipe, private _snackbar:MatSnackBar) { }

  amenity:string = '';
  classAvailable:string = '';
  bookingPolicy:string = '';
  classWithFare:ClassWithFare = {
    className: '',
    fare: ''
  };


  addNewBusResponse!:addNewBusResponse;
  addNewBusRequest: addNewBusRequest= {
    busName: '',
    source: '',
    destination: '',
    boardingPoint: '',
    droppingPoint: '',
    departureDate: '',
    departureTime: '',
    amenities: [],
    coachType: '',
    totalAvailableSeats: '24',
    classAvailable: [],
    bookingPolicies: [],
    classWithFare: []
  };

  addSeatsDataRequest:seatsDataResponse[]= [];
  addSeatData:seatsDataResponse={
    seatNo: '',
    fare: '',
    class: '',
    status: 'Available',
    userName: '',
    email: '',
    phoneNo: ''
  };

  seatData = {
    "seatNumberFrom":"",
    "seatNumberTo":"",
    "className":""
  }


  seatsNumber= ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];

  addNewAmenity(){
    this.addNewBusRequest.amenities.push(this.amenity);
    this.amenity= '';
    this._snackbar.open('Amenity Added','',{
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top'
    })
    console.log(this.addNewBusRequest.amenities);
  }


  addNewclassAvailable(){
    this.addNewBusRequest.classAvailable.push(this.classAvailable);
    this.classAvailable= '';
    this._snackbar.open('Class Added','',{
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top'
    })
    console.log(this.addNewBusRequest.classAvailable);
  }
  
  addNewBookingPolicy(){
    this.addNewBusRequest.bookingPolicies.push(this.bookingPolicy);
    this.bookingPolicy= '';
    this._snackbar.open('Policy Added','',{
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top'
    })
    console.log(this.addNewBusRequest.bookingPolicies);
  }

  addNewClassWithFare(){
    console.log('class with fare', this.classWithFare)
    let arr = {'className':this.classWithFare.className, 'fare':this.classWithFare.fare}
    this.addNewBusRequest.classWithFare.push(arr);

    this.classWithFare.className= '';
    this.classWithFare.fare= '';

    this._snackbar.open('Added','',{
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top'
    })
    console.log('after',this.addNewBusRequest.classWithFare);
  }

  submitBus(){
    this._callapi.addNewBus(this.addNewBusRequest).subscribe((d)=>{

      Swal.fire('Success','Bus have been added Successfully!','success');
      this.addNewBusResponse= d;
      console.log('add new bus response',d)
    },(e)=>{
      Swal.fire('Failure','Bus have not been added!','error');

    })
  }

  convertTime(): void {
    const currentDate = new Date(); // Get the current date
    const timeParts = this.addNewBusRequest.departureTime.split(':'); // Split the time string
    currentDate.setHours(Number(timeParts[0])); // Set the hours
    currentDate.setMinutes(Number(timeParts[1])); // Set the minutes
    currentDate.setSeconds(0); // Set seconds to 0

    this.addNewBusRequest.departureTime =  this.datePipe.transform(currentDate, 'yyyy-MM-dd HH:mm:ss')!;
    console.log('new parture time is', this.addNewBusRequest.departureTime)
  }

  // getFare(c:string){
  //   console.log('reached get fare',c)
  // }
  fetchFareByClassName(cName:string){
    let resp= '';
    this.addNewBusRequest.classWithFare.filter((d)=>{
      if(d.className===cName){
        resp = d.fare;
      }
    })
    return resp;
  }

  addSeats(){
    console.log('button clicked addseats')
    console.log('seatData is ',this.seatData)
    let numberFrom =  Number.parseInt(this.seatData.seatNumberFrom);
    let numberTo =  Number.parseInt(this.seatData.seatNumberTo);
    let fare =  this.fetchFareByClassName(this.seatData.className);
    console.log('fare fetched', fare)
    if(numberFrom<=numberTo){
      for (let index = numberFrom; index <= numberTo; index++) {
        let seatObject:seatsDataResponse = {
          seatNo: index.toString(),
          fare: fare,
          class: this.seatData.className,
          status: 'Available',
          userName: '',
          email: '',
          phoneNo: ''
        }
        this.addSeatsDataRequest.push(seatObject)
        this._snackbar.open('Selected Seats are added','',{
          duration:3000,
          horizontalPosition:'right',
          verticalPosition:'bottom'
        })
        
      }
    }
    else{
      this._snackbar.open('Something went wrong','',{
        duration:3000,
        horizontalPosition:'right',
        verticalPosition:'bottom'
      })
    }


  }

  submitSeatsData(){
    this._callapi.addSeatsData(this.addNewBusResponse.busId.toString(),this.addSeatsDataRequest).subscribe((d)=>{
      Swal.fire('Success','Bus has been added successfully','success')
    })
  }
}
