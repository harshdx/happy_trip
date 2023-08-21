import { Component, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { loginadminrequest } from 'src/app/models/loginadminrequestmodel';
import { CallapiService } from 'src/app/services/callapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.scss']
})
export class LoginadminComponent {

  @Output() loginadminevent = new EventEmitter<string>();
  constructor(private _callapi: CallapiService, private snackbar:MatSnackBar, private router:Router) { }

  loginadminrequest:loginadminrequest={
    username: '',
    password: ''
  };
 


  submitLoginRequest() {

    console.log('login admin request is submitted', this.loginadminrequest)
    this._callapi.loginAdmin(this.loginadminrequest).subscribe((d) => {
      console.log('d is',d)
      if(d.status==="User is Admin"){
        this.snackbar.open('Admin loggedIn Successfully','',{
          duration:3000,
          horizontalPosition:'right',
          verticalPosition:'bottom'
        });
        localStorage.setItem('UserAuth','Admin')
        this._callapi.isUserAdmin = true;
        this.refreshApplicationn();
      }
      else if(d.status==='User is not Admin'){
        this.snackbar.open('Invalid Credentials','',{
          duration:3000,
          horizontalPosition:'right',
          verticalPosition:'bottom'
        });
      }

    })
  }

  refreshApplication() {
    console.log('came inside')
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['']);
    });
  }

  refreshApplicationn() {
    location.reload();
  }
}
