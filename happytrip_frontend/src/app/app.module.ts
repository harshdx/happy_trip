import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LeftsidebarComponent } from './components/leftsidebar/leftsidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './components/home/home.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { AllbusesComponent } from './components/allbuses/allbuses.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { SeatselectComponent } from './components/seatselect/seatselect.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import { UserinfComponent } from './components/userinf/userinf.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { ItemSelectionDialogComponent } from './components/item-selection-dialog/item-selection-dialog.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { SearchticketComponent } from './components/searchticket/searchticket.component';
import { CancelticketComponent } from './components/cancelticket/cancelticket.component';
import { AddnewvoucherComponent } from './components/addnewvoucher/addnewvoucher.component';
import { DatePipe } from '@angular/common';
import { AddnewbusComponent } from './components/addnewbus/addnewbus.component'; // Import DatePipe
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { PassengerdetailsComponent } from './components/passengerdetails/passengerdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftsidebarComponent,
    DashboardComponent,
    HomeComponent,
    AllbusesComponent,
    SeatselectComponent,
    UserinfComponent,
    ItemSelectionDialogComponent,
    TicketComponent,
    SearchticketComponent,
    CancelticketComponent,
    AddnewvoucherComponent,
    AddnewbusComponent,
    LoginadminComponent,
    PassengerdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatRadioModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    // MatDialog,
    // MAT_DIALOG_DATA,
    MatDialogModule,
    MatStepperModule,
    MatSelectModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
