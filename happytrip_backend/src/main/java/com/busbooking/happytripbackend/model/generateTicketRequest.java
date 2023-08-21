package com.busbooking.happytripbackend.model;

import java.util.ArrayList;

public class generateTicketRequest {

	public String busName;
	public String source;
	public String destination;
	public String boardingPoint;
	public String droppingPoint;
	public String departureDate;
	public String departureTime;
	public String coachType;
	public String userId;
	public String userName;
	public String emailId;
	public String phoneNumber;
	public String busId;
	public ArrayList<String> seatsBooked;
	public String totalAmountPaid;
	public String getBusName() {
		return busName;
	}
	public void setBusName(String busName) {
		this.busName = busName;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public String getBoardingPoint() {
		return boardingPoint;
	}
	public void setBoardingPoint(String boardingPoint) {
		this.boardingPoint = boardingPoint;
	}
	public String getDroppingPoint() {
		return droppingPoint;
	}
	public void setDroppingPoint(String droppingPoint) {
		this.droppingPoint = droppingPoint;
	}
	public String getDepartureDate() {
		return departureDate;
	}
	public void setDepartureDate(String departureDate) {
		this.departureDate = departureDate;
	}
	public String getDepartureTime() {
		return departureTime;
	}
	public void setDepartureTime(String departureTime) {
		this.departureTime = departureTime;
	}
	public String getCoachType() {
		return coachType;
	}
	public void setCoachType(String coachType) {
		this.coachType = coachType;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getBusId() {
		return busId;
	}
	public void setBusId(String busId) {
		this.busId = busId;
	}
	public ArrayList<String> getSeatsBooked() {
		return seatsBooked;
	}
	public void setSeatsBooked(ArrayList<String> seatsBooked) {
		this.seatsBooked = seatsBooked;
	}
	public String getTotalAmountPaid() {
		return totalAmountPaid;
	}
	public void setTotalAmountPaid(String totalAmountPaid) {
		this.totalAmountPaid = totalAmountPaid;
	}
	@Override
	public String toString() {
		return "generateTicketRequest [busName=" + busName + ", source=" + source + ", destination=" + destination
				+ ", boardingPoint=" + boardingPoint + ", droppingPoint=" + droppingPoint + ", departureDate="
				+ departureDate + ", departureTime=" + departureTime + ", coachType=" + coachType + ", userId=" + userId
				+ ", userName=" + userName + ", emailId=" + emailId + ", phoneNumber=" + phoneNumber + ", busId="
				+ busId + ", seatsBooked=" + seatsBooked + ", totalAmountPaid=" + totalAmountPaid + "]";
	}
	public generateTicketRequest(String busName, String source, String destination, String boardingPoint,
			String droppingPoint, String departureDate, String departureTime, String coachType, String userId,
			String userName, String emailId, String phoneNumber, String busId, ArrayList<String> seatsBooked,
			String totalAmountPaid) {
		super();
		this.busName = busName;
		this.source = source;
		this.destination = destination;
		this.boardingPoint = boardingPoint;
		this.droppingPoint = droppingPoint;
		this.departureDate = departureDate;
		this.departureTime = departureTime;
		this.coachType = coachType;
		this.userId = userId;
		this.userName = userName;
		this.emailId = emailId;
		this.phoneNumber = phoneNumber;
		this.busId = busId;
		this.seatsBooked = seatsBooked;
		this.totalAmountPaid = totalAmountPaid;
	}
	public generateTicketRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	

	
}
