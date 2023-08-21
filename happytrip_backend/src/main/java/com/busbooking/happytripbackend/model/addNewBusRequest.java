package com.busbooking.happytripbackend.model;

public class addNewBusRequest {

	public String busName;
	public String source;
	public String destination;
	public String boardingPoint;
	public String droppingPoint;
	public String departureDate;
	public String departureTime;
	public String amenities;
	public String coachType;
	public String totalAvailableSeats;
	public String classAvailable;
	public String bookingPolicies;
	public String classWithFare;
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
	public String getAmenities() {
		return amenities;
	}
	public void setAmenities(String amenities) {
		this.amenities = amenities;
	}
	public String getCoachType() {
		return coachType;
	}
	public void setCoachType(String coachType) {
		this.coachType = coachType;
	}
	public String getTotalAvailableSeats() {
		return totalAvailableSeats;
	}
	public void setTotalAvailableSeats(String totalAvailableSeats) {
		this.totalAvailableSeats = totalAvailableSeats;
	}
	public String getClassAvailable() {
		return classAvailable;
	}
	public void setClassAvailable(String classAvailable) {
		this.classAvailable = classAvailable;
	}
	public String getBookingPolicies() {
		return bookingPolicies;
	}
	public void setBookingPolicies(String bookingPolicies) {
		this.bookingPolicies = bookingPolicies;
	}
	public String getClassWithFare() {
		return classWithFare;
	}
	public void setClassWithFare(String classWithFare) {
		this.classWithFare = classWithFare;
	}
	@Override
	public String toString() {
		return "addNewBusRequest [busName=" + busName + ", source=" + source + ", destination=" + destination
				+ ", boardingPoint=" + boardingPoint + ", droppingPoint=" + droppingPoint + ", departureDate="
				+ departureDate + ", departureTime=" + departureTime + ", amenities=" + amenities + ", coachType="
				+ coachType + ", totalAvailableSeats=" + totalAvailableSeats + ", classAvailable=" + classAvailable
				+ ", bookingPolicies=" + bookingPolicies + ", classWithFare=" + classWithFare + "]";
	}
	public addNewBusRequest(String busName, String source, String destination, String boardingPoint,
			String droppingPoint, String departureDate, String departureTime, String amenities, String coachType,
			String totalAvailableSeats, String classAvailable, String bookingPolicies, String classWithFare) {
		super();
		this.busName = busName;
		this.source = source;
		this.destination = destination;
		this.boardingPoint = boardingPoint;
		this.droppingPoint = droppingPoint;
		this.departureDate = departureDate;
		this.departureTime = departureTime;
		this.amenities = amenities;
		this.coachType = coachType;
		this.totalAvailableSeats = totalAvailableSeats;
		this.classAvailable = classAvailable;
		this.bookingPolicies = bookingPolicies;
		this.classWithFare = classWithFare;
	}
	public addNewBusRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	
}
