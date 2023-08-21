package com.busbooking.happytripbackend.controller;

import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.busbooking.happytripbackend.dao.ticketDao;
import com.busbooking.happytripbackend.entity.busEntity;
import com.busbooking.happytripbackend.entity.seatAvailabilityEntity;
import com.busbooking.happytripbackend.entity.ticketEntity;
import com.busbooking.happytripbackend.entity.userEntity;
import com.busbooking.happytripbackend.entity.voucherEntity;
import com.busbooking.happytripbackend.model.addNewBusRequest;
import com.busbooking.happytripbackend.model.addNewUserRequest;
import com.busbooking.happytripbackend.model.addNewVoucherRequest;
import com.busbooking.happytripbackend.model.addSeatAvailabilityRequest;
import com.busbooking.happytripbackend.model.cancelTicketRequest;
import com.busbooking.happytripbackend.model.cancelTicketResponse;
import com.busbooking.happytripbackend.model.generateTicketRequest;
import com.busbooking.happytripbackend.model.getAllBusRequest;
import com.busbooking.happytripbackend.model.validateAdminRequest;
import com.busbooking.happytripbackend.model.validateAdminResponse;
import com.busbooking.happytripbackend.service.busService;

@RestController
@RequestMapping("/api/bus")
@CrossOrigin(origins = "*")
public class busController {

	@Autowired
	public busService busservice;
	
	@Autowired
	public ticketDao ticketdao;

	@RequestMapping(value = "/getAllBusesUsingRouteAndDate", method = RequestMethod.POST)
	public List<busEntity> getAllBusesUsingRouteAndDateCont(@RequestBody getAllBusRequest request) {

		String source = request.getSource();
		String destination = request.getDestination();
		String date = request.getDepartureDate();
		System.out.println("source-->" + source + "destination-->" + destination + " date-->" + date);
		return busservice.getAllBusesUsingRouteAndDateServ(source, destination, date);
	}

	@RequestMapping(value = "/getBusByBusId", method = RequestMethod.GET)
	public busEntity getBusByBusIdCont(@RequestParam String busId) {

		System.out.println("busId-->" + busId);
		return busservice.getBusByBusIdServ(Long.parseLong(busId));
	}

	@RequestMapping(value = "/addNewBus", method = RequestMethod.POST)
	public busEntity addNewBusCont(@RequestBody String addnewbusrequest) {

		System.out.println("addnewbusrequest"+addnewbusrequest);
		JSONObject json = new JSONObject(addnewbusrequest);
		System.out.println("json "+json);
		return busservice.addNewBusServ(json);
//		return null;
	}
	
	@RequestMapping(value = "/validateAdmin", method = RequestMethod.POST)
	public validateAdminResponse validateAdminCont(@RequestBody validateAdminRequest validateadminrequest) {

		return busservice.validateAdminServ(validateadminrequest);
	}

	@RequestMapping(value = "/addSeatsdata", method = RequestMethod.POST)
	public seatAvailabilityEntity addSeatAvailabilityCont(
			@RequestParam String busId,
			@RequestBody String seatsDataRequest) {
		return busservice.addSeatAvailabilityServ(Long.parseLong(busId), seatsDataRequest);
	}

	@RequestMapping(value = "/getseatsData", method = RequestMethod.GET)
	public seatAvailabilityEntity getseatsDataCont(@RequestParam String busId) {

		System.out.println("busId-->" + busId);
		return busservice.getseatsDataServ(Long.parseLong(busId));
	}

	@RequestMapping(value = "/updateSeatsDataByBusId", method = RequestMethod.PUT)
	public boolean updateSeatsDataByBusIdCont(
			@RequestParam String busId,
			@RequestBody String seatsDataRequest) {
		System.out.println("busId from input>"+busId);
		System.out.println("seatsDataRequest from input>"+seatsDataRequest);

		int isUpdateSuccessfull =  busservice.updateSeatsDataByBusIdServ( Long.parseLong(busId), seatsDataRequest);
		if(isUpdateSuccessfull == 1) {
			return true;
		}
		else {
			return false;
		}
	
	}
	
	@RequestMapping(value = "/generateTicket", method = RequestMethod.POST)
	public ticketEntity generateTicketCont(@RequestBody generateTicketRequest generateticketrequest) {
		return busservice.generateTicketServ(generateticketrequest);
	}

	@RequestMapping(value = "/addNewUser", method = RequestMethod.POST)
	public userEntity addNewUserCont(@RequestBody addNewUserRequest addnewuserrequest) {

		return busservice.addNewUserServ(addnewuserrequest);
	}

	@RequestMapping(value = "/getTicketInfUsingTicketId", method = RequestMethod.GET)
	public ticketEntity getTicketInfUsingTicketIdCont(@RequestParam String ticketId) {

		System.out.println("ticketId-->" + ticketId);
		return busservice.getTicketInfUsingTicketIdServ(ticketId);
	}
	
	@RequestMapping(value = "/addNewVoucher", method = RequestMethod.POST)
	public voucherEntity addNewVoucherCont(@RequestBody addNewVoucherRequest addnewvoucherrequest) {

		
		return busservice.addNewVoucherServ(addnewvoucherrequest);
	}
	
	@RequestMapping(value = "/getallVouchers", method = RequestMethod.GET)
	public List<voucherEntity> getallVouchersCont() {

		return busservice.getallVouchersServ();
	}
	
	@RequestMapping(value = "/getPassengerDetailByBusId", method = RequestMethod.GET)
	public List<ticketEntity> getPassengerDetailByBusIdCont(@RequestParam String busId) {

		return busservice.getPassengerDetailByBusIdServ(busId);
	}

	@RequestMapping(value = "/cancelTicket", method = RequestMethod.PUT)
	public ResponseEntity<cancelTicketResponse> cancelTicketCont(@RequestBody cancelTicketRequest cancelticketrequest) {

		String ticketId = cancelticketrequest.getTicketId();
		String busId = cancelticketrequest.getBusId();
		ArrayList<String> bookedSeats = cancelticketrequest.getBookedSeats();
		int isTicketCancelled = busservice.cancelTicketServ(ticketId);
		System.out.println(isTicketCancelled);
		if (isTicketCancelled == 1) {

			seatAvailabilityEntity seatsEntity = busservice.getseatsDataServ(Long.parseLong(busId));
			String seatsData = seatsEntity.getSeatsData();
			System.out.println("seats data " + seatsData);

			boolean isUpdateSuccessful = busservice.updateSeatsInformation(seatsData, bookedSeats, busId);
			if (isUpdateSuccessful) {
				cancelTicketResponse cancelticketresponse = busservice.getTicketCancelResponse(ticketId);
				return new ResponseEntity<cancelTicketResponse>(cancelticketresponse, HttpStatus.OK);
			} else {
				cancelTicketResponse cancelticketresponse = new cancelTicketResponse();
				return new ResponseEntity<cancelTicketResponse>(cancelticketresponse, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		} else {
			cancelTicketResponse cancelticketresponse = new cancelTicketResponse();
			return new ResponseEntity<cancelTicketResponse>(cancelticketresponse, HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}
}
