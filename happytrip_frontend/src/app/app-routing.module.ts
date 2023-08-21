import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AllbusesComponent } from './components/allbuses/allbuses.component';
import { SeatselectComponent } from './components/seatselect/seatselect.component';
import { UserinfComponent } from './components/userinf/userinf.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { AddnewvoucherComponent } from './components/addnewvoucher/addnewvoucher.component';
import { AddnewbusComponent } from './components/addnewbus/addnewbus.component';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { adminauthGuard } from './guards/adminauth.guard';

const routes: Routes = [
  {
    path:'', redirectTo:'/dashboard', pathMatch:'full'
  },
  {
    

    path:"dashboard", component:DashboardComponent, 
    children:[
      {path:"", component:HomeComponent},
      {path:"allbuses", component:AllbusesComponent},
      {path:"seatselect", component:SeatselectComponent},
      {path:"userinf", component:UserinfComponent},
      {path:"ticket", component:TicketComponent},
      {path:"addnewvoucher", component:AddnewvoucherComponent, canActivate:[adminauthGuard]},
      {path:"addnewbus", component:AddnewbusComponent , canActivate:[adminauthGuard]},
      {path:"loginadmin", component:LoginadminComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
