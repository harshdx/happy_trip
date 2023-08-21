import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLs } from '../configuration/config';
import { getAllBusesResponse } from '../models/getAllBusesByRouteDateModel';
import { getAllBusesRequest } from '../models/getAllBusesRequestModel';
import { seatsDataResponse } from '../models/seatsDataResponseModel';
import { addNewUserRequest } from '../models/addNewUserRequestModel';
import { addNewUserResponse } from '../models/addNewUserResponseModel';
import { getAllVouchersResponse } from '../models/getAllVouchersResponseModel';
import { generateNewTicketRequest } from '../models/generateNewTicketRequestModel';
import { generateNewTicketResponse } from '../models/generateNewTicketResponseModel';
import { cancelTicketRequest } from '../models/cancelTicketRequestModel';
import { cancelTicketResponse } from '../models/cancelTicketResponseModel';
import { addNewVoucherRequest } from '../models/addNewVoucherRequestModel';
import { addNewVoucherResponse } from '../models/addNewVoucherResponseModel';
import { addNewBusRequest } from '../models/addNewBusRequestModel';
import { addSeatsDataResponse } from '../models/addSeatsDataResponseModel';
import { loginadminrequest } from '../models/loginadminrequestmodel';

@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  constructor(private http: HttpClient) { }

  getAllBusesUrl: string = "";
  getSeatsDataUrl: string = "";
  addNewUserUrl: string = "";
  getAllVouchersUrl: string = "";
  updateSeatsDataByBusIdUrl: string = "";
  generateNewTicketRequestUrl: string = "";
  cancelTicketUrl: string = "";
  getTicketInfByTicketIdUrl: string = "";
  getPassengerDetailsByBusIdUrl: string = "";
  addNewVoucherUrl: string = "";
  addNewBusUrl: string = "";
  addSeatsDataUrl: string = "";
  loginAdminUrl:string= "";

  getAllBusResponse: getAllBusesResponse[] = [];
  selectedBus: getAllBusesResponse | undefined;
  selectedBusSeatsData: seatsDataResponse[] = [];
  selectedSeatsByUser: seatsDataResponse[] = [];
  selectedSeatsByUserFareTotal: number = 0;
  selectedBusId: any;
  generateTicketResponse!: generateNewTicketResponse;
  ticketsQuantity: number = 0;
  isUserAdmin:boolean = false;



  getAllBusesUsingRouteAndDate(getAllBusesRequest: getAllBusesRequest) {
    this.getAllBusesUrl = URLs.getAllBusesUsingRouteAndDateURL;
    const requestPayload = getAllBusesRequest;
    console.log("calling this endpoint ", this.getAllBusesUrl)
    console.log("calling this payload ", requestPayload)

    return this.http.post<getAllBusesResponse[]>(this.getAllBusesUrl, getAllBusesRequest);
  }

  getSeatsDataByBusId(busId: string) {
    this.getSeatsDataUrl = URLs.getSeatsDataURL;
    console.log("calling this endpoint ", this.getSeatsDataUrl + 'busId=' + busId)

    return this.http.get<any>(this.getSeatsDataUrl + 'busId=' + busId);
  }

  addNewUser(user: addNewUserRequest) {
    this.addNewUserUrl = URLs.addNewUserURL;
    const requestPayload = user;
    console.log("calling this endpoint ", this.addNewUserUrl)
    console.log("calling this payload ", requestPayload)

    return this.http.post<addNewUserResponse>(this.addNewUserUrl, requestPayload);
  }

  getAllVouchers() {
    this.getAllVouchersUrl = URLs.getAllVouchersURL;
    console.log("calling this endpoint ", this.getAllVouchersUrl)

    return this.http.get<getAllVouchersResponse[]>(this.getAllVouchersUrl);
  }

  updateSeatsDataByBusId(busId: string, updatedSeatsData: any) {
    this.updateSeatsDataByBusIdUrl = URLs.updateSeatsDataByBusIdURL;
    const requestPayload = updatedSeatsData;
    const endpoint = this.updateSeatsDataByBusIdUrl + 'busId=' + busId
    console.log("calling this endpoint ", endpoint)
    console.log("calling this payload ", requestPayload)

    return this.http.put<boolean>(endpoint, requestPayload);
  }


  generateNewTicket(generateNewTicketRequest: generateNewTicketRequest) {
    this.generateNewTicketRequestUrl = URLs.generateTicketURL;
    const requestPayload = generateNewTicketRequest;
    console.log("calling this endpoint ", this.generateNewTicketRequestUrl)
    console.log("calling this payload ", requestPayload)

    return this.http.post<generateNewTicketResponse>(this.generateNewTicketRequestUrl, requestPayload);
  }

  cancelTicket(cancelTicketRequest: cancelTicketRequest) {
    this.cancelTicketUrl = URLs.cancelTicketURL;
    const requestPayload = cancelTicketRequest;
    console.log("calling this payload ", requestPayload)

    return this.http.put<cancelTicketResponse>(this.cancelTicketUrl, requestPayload);
  }

  getTicketInfByTicketId(ticketId: string) {
    this.getTicketInfByTicketIdUrl = URLs.getTicketInfByTicketIdURL;
    const endpoint = this.getTicketInfByTicketIdUrl + 'ticketId=' + ticketId
    console.log("calling this endpoint ", endpoint)

    return this.http.get<generateNewTicketResponse>(endpoint);
  }

  getPassengerDetailsByBusId(busId: string) {
    this.getPassengerDetailsByBusIdUrl = URLs.getPassengerDetailsByBusIdURL;
    const endpoint = this.getPassengerDetailsByBusIdUrl + 'busId=' + busId
    console.log("calling this endpoint ", endpoint)

    return this.http.get<generateNewTicketResponse[]>(endpoint);
  }

  addNewVoucher(addnewvoucherrequest: addNewVoucherRequest) {
    this.addNewVoucherUrl = URLs.addNewVoucherURL;
    const requestPayload = addnewvoucherrequest;
    console.log("calling this endpoint ", this.addNewVoucherUrl)
    console.log("calling this payload ", requestPayload)

    return this.http.post<addNewVoucherResponse>(this.addNewVoucherUrl, requestPayload);
  }

  addNewBus(addnewbusrequest: addNewBusRequest) {
    this.addNewBusUrl = URLs.addNewBusURL;
    const requestPayload = addnewbusrequest;
    console.log("calling this endpoint ", this.addNewBusUrl)
    console.log("calling this payload ", requestPayload)

    return this.http.post<getAllBusesResponse>(this.addNewBusUrl, requestPayload);
  }

  addSeatsData(busId: string, seatsData: seatsDataResponse[]) {
    this.addSeatsDataUrl = URLs.addSeatsDataURL;
    const endpoint = this.addSeatsDataUrl + 'busId=' + busId
    const requestPayload = seatsData;

    console.log("calling this endpoint ", endpoint)
    console.log("calling this payload ", requestPayload)
    return this.http.post<addSeatsDataResponse>(endpoint, requestPayload);
  }

  loginAdmin(loginadminrequest: loginadminrequest) {
    this.loginAdminUrl = URLs.loginAdminURL;
    const requestPayload = loginadminrequest;

    console.log("calling this endpoint ", this.loginAdminUrl)
    console.log("calling this payload ", requestPayload)
    return this.http.post<any>(this.loginAdminUrl, requestPayload);
  }

}
