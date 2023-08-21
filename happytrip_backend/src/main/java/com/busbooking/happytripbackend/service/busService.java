package com.busbooking.happytripbackend.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.busbooking.happytripbackend.dao.adminDao;
//import com.busbooking.happytripbackend.controller.passengerDetailResponse;
import com.busbooking.happytripbackend.dao.busDao;
import com.busbooking.happytripbackend.dao.seatsDao;
import com.busbooking.happytripbackend.dao.ticketDao;
import com.busbooking.happytripbackend.dao.userDao;
import com.busbooking.happytripbackend.dao.voucherDao;
import com.busbooking.happytripbackend.entity.adminEntity;
import com.busbooking.happytripbackend.entity.busEntity;
import com.busbooking.happytripbackend.entity.seatAvailabilityEntity;
import com.busbooking.happytripbackend.entity.ticketEntity;
import com.busbooking.happytripbackend.entity.userEntity;
import com.busbooking.happytripbackend.entity.voucherEntity;
import com.busbooking.happytripbackend.model.addNewUserRequest;
import com.busbooking.happytripbackend.model.addNewVoucherRequest;
import com.busbooking.happytripbackend.model.cancelTicketResponse;
import com.busbooking.happytripbackend.model.generateTicketRequest;
import com.busbooking.happytripbackend.model.validateAdminRequest;
import com.busbooking.happytripbackend.model.validateAdminResponse;

@Service
public class busService {

	@Autowired
	public busDao busdao;

	@Autowired
	public seatsDao seatsdao;

	@Autowired
	public ticketDao ticketdao;

	@Autowired
	public userDao userdao;

	@Autowired
	public voucherDao voucherdao;

	@Autowired
	public adminDao admindao;

	public List<busEntity> getAllBusesUsingRouteAndDateServ(String source, String destination, String date) {
		// TODO Auto-generated method stub
//		Date date = departureDate;
		return this.busdao.getAllBusesUsingRouteAndDate(source, destination, date);

	}

	public busEntity getBusByBusIdServ(Long busId) {
		return this.busdao.getBusByBusId(busId);

	}

	public busEntity addNewBusServ(JSONObject addnewbusrequest) {
		busEntity busentity = new busEntity();
		busentity.setBusName(addnewbusrequest.getString("busName"));
		busentity.setSource(addnewbusrequest.getString("source"));
		busentity.setDestination(addnewbusrequest.getString("destination"));
		busentity.setBoardingPoint(addnewbusrequest.getString("boardingPoint"));
		busentity.setDroppingPoint(addnewbusrequest.getString("droppingPoint"));
		busentity.setDepartureDate(addnewbusrequest.getString("departureDate"));
		busentity.setDepartureTime(addnewbusrequest.getString("departureTime"));
		busentity.setAmenities(addnewbusrequest.getJSONArray("amenities").toString());
		busentity.setCoachType(addnewbusrequest.getString("coachType"));
		busentity.setTotalAvailableSeats(addnewbusrequest.getString("totalAvailableSeats"));
		busentity.setClassAvailable(addnewbusrequest.getJSONArray("classAvailable").toString());
		busentity.setBookingPolicies(addnewbusrequest.getJSONArray("bookingPolicies").toString());
		busentity.setClassWithFare(addnewbusrequest.getJSONArray("classWithFare").toString());

		return this.busdao.save(busentity);
	}

	public seatAvailabilityEntity addSeatAvailabilityServ(Long busId, String seatsDataRequest) {
		seatAvailabilityEntity seatsEntity = new seatAvailabilityEntity();
		seatsEntity.setBusId(busId);
		seatsEntity.setSeatsData(seatsDataRequest);
		System.out.println("seatsEntity" + seatsEntity);
		return this.seatsdao.save(seatsEntity);
	}

	public int updateSeatsDataByBusIdServ(Long busId, String seatsData) {

		return this.seatsdao.updateSeatsDataByBusId(busId, seatsData);
	}

	public seatAvailabilityEntity getseatsDataServ(Long busId) {
		return this.seatsdao.getseatsData(busId);
	}

	public ticketEntity generateTicketServ(generateTicketRequest generateticketrequest) {
		ticketEntity ticketentity = new ticketEntity();

		String ticketNumberGenerated = getRandomNumber();

		ticketentity.setTicketId(ticketNumberGenerated);
		ticketentity.setBusName(generateticketrequest.getBusName());
		ticketentity.setSource(generateticketrequest.getSource());
		ticketentity.setDestination(generateticketrequest.getDestination());
		ticketentity.setBoardingPoint(generateticketrequest.getBoardingPoint());
		ticketentity.setDroppingPoint(generateticketrequest.getDroppingPoint());
		ticketentity.setDepartureDate(generateticketrequest.getDepartureDate());
		ticketentity.setDepartureTime(generateticketrequest.getDepartureTime());
		ticketentity.setCoachType(generateticketrequest.getCoachType());
		ticketentity.setUserId(generateticketrequest.getUserId());
		ticketentity.setUserName(generateticketrequest.getUserName());
		ticketentity.setEmailId(generateticketrequest.getEmailId());
		ticketentity.setPhoneNumber(generateticketrequest.getPhoneNumber());
		ticketentity.setTicketStatus("Active");
		ticketentity.setCancellationDate(null);
		ticketentity.setRefundedAmount(null);
		ticketentity.setBusId(generateticketrequest.getBusId());
		ticketentity.setSeatsBooked(generateticketrequest.getSeatsBooked().toString());
		ticketentity.setCreatedDate(new Date());
		ticketentity.setTotalAmountPaid(generateticketrequest.getTotalAmountPaid());
		return this.ticketdao.save(ticketentity);
	}

	public userEntity addNewUserServ(addNewUserRequest addnewuserrequest) {
		userEntity userentity = new userEntity();
		userentity.setUserName(addnewuserrequest.getUserName());
		userentity.setEmailId(addnewuserrequest.getEmailId());
		userentity.setPhoneNumber(addnewuserrequest.getPhoneNumber());

		return this.userdao.save(userentity);
	}

	public voucherEntity addNewVoucherServ(addNewVoucherRequest addnewvoucherrequest) {
		voucherEntity voucherentity = new voucherEntity();
		voucherentity.setVoucherStartDate(addnewvoucherrequest.getVoucherStartDate());
		voucherentity.setVoucherEndDate(addnewvoucherrequest.getVoucherEndDate());
		voucherentity.setVoucherStatus(addnewvoucherrequest.getVoucherStatus());
		voucherentity.setVoucherAmount(addnewvoucherrequest.getVoucherAmount());
		voucherentity.setVoucherCode(addnewvoucherrequest.getVoucherCode());
		voucherentity.setMinimumAmount(addnewvoucherrequest.getMinimumAmount());
		voucherentity.setDiscountPercent(addnewvoucherrequest.getDiscountPercent());

		return this.voucherdao.save(voucherentity);
	}

	public ticketEntity getTicketInfUsingTicketIdServ(String ticketId) {
		return this.ticketdao.getTicketInfUsingTicketId(ticketId);
	}

	private String getRandomNumber() {
		int length = 8;
		String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		StringBuilder randomString = new StringBuilder();
		Random random = new Random();

		for (int i = 0; i < length; i++) {
			int randomIndex = random.nextInt(characters.length());
			randomString.append(characters.charAt(randomIndex));
		}
		return randomString.toString();
	}

	public int cancelTicketServ(String ticketId) {
		return this.ticketdao.cancelTicket(ticketId);
	}

	public boolean updateSeatsInformation(String seatsData, ArrayList<String> bookedSeats, String busId) {

		System.out.println("came");

		JSONArray seatsDataJson = new JSONArray(seatsData);
		System.out.println("seatsDataJson before change" + seatsDataJson);
		System.out.println("bookedSeats " + bookedSeats);
		for (int i = 0; i < seatsDataJson.length(); i++) {
			if (bookedSeats.contains(seatsDataJson.getJSONObject(i).getString("seatNo"))) {
				seatsDataJson.getJSONObject(i).put("status", "available");
				seatsDataJson.getJSONObject(i).put("userName", "");
				seatsDataJson.getJSONObject(i).put("email", "");
				seatsDataJson.getJSONObject(i).put("phoneNo", "");
			}
		}

		System.out.println("seatsDataJson after change" + seatsDataJson);

		int isUpdateSeatsDataSuccessful = updateSeatsDataByBusIdServ(Long.parseLong(busId), seatsDataJson.toString());
		if (isUpdateSeatsDataSuccessful == 1) {
			return true;
		} else {
			return false;
		}
	}

	public List<voucherEntity> getallVouchersServ() {

		return this.voucherdao.findAll();
	}

	public cancelTicketResponse getTicketCancelResponse(String ticketId) {
		ticketEntity ticketentity = getTicketInfUsingTicketIdServ(ticketId);
		cancelTicketResponse cancelticketresponse = new cancelTicketResponse();
		cancelticketresponse.setBusId(ticketentity.getBusId());
		cancelticketresponse.setCancelationDate(ticketentity.getCancellationDate());
		cancelticketresponse.setRefundedAmount(ticketentity.getRefundedAmount());
		cancelticketresponse.setTicketId(ticketentity.getTicketId());

		return cancelticketresponse;
	}

	public List<ticketEntity> getPassengerDetailByBusIdServ(String busId) {
		return ticketdao.getPassengerDetailByBusId(busId);

	}

	public validateAdminResponse validateAdminServ(validateAdminRequest validateadminrequest) {
		adminEntity isAdminValid =  this.admindao.validateAdmin(validateadminrequest.getUsername(), validateadminrequest.getPassword());
		System.out.println("is admin valid"+ isAdminValid);
		if(isAdminValid== null) {
			validateAdminResponse json = new validateAdminResponse();
			json.setStatus("User is not Admin");
			return json;
		}
		else {
			validateAdminResponse json = new validateAdminResponse();
			json.setStatus("User is Admin");
			return json;
//			return "User is Admin";
		}
	}

}
