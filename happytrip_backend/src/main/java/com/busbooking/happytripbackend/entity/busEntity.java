package com.busbooking.happytripbackend.entity;

import java.sql.Time;
import java.util.ArrayList;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "bus")
public class busEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "bus_Id")
	private Long busId;
	
	@Column(name = "bus_name")
	private String busName;
	
	@Column(name = "source")
	private String source;
	
	@Column(name = "destination")
	private String destination;
	
	@Column(name = "boarding_Point")
	private String boardingPoint;
	
	@Column(name = "dropping_Point")
	private String droppingPoint;

	@Column(name = "departure_date")
	private String departureDate;
	
	@Column(name = "departure_time")
	private String departureTime;
	
	@Column(name = "amenities")
	private String amenities;
	
	@Column(name = "coach_type")
	private String coachType;
	
	@Column(name = "total_available_seats")
	private String totalAvailableSeats;
	
	@Column(name = "class_available")
	private String classAvailable;
	
	@Column(name = "booking_Policies")
	private String bookingPolicies;
	
	@Column(name = "class_with_fare")
	private String classWithFare;

	public Long getBusId() {
		return busId;
	}

	public void setBusId(Long busId) {
		this.busId = busId;
	}

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
		return "busEntity [busId=" + busId + ", busName=" + busName + ", source=" + source + ", destination="
				+ destination + ", boardingPoint=" + boardingPoint + ", droppingPoint=" + droppingPoint
				+ ", departureDate=" + departureDate + ", departureTime=" + departureTime + ", amenities=" + amenities
				+ ", coachType=" + coachType + ", totalAvailableSeats=" + totalAvailableSeats + ", classAvailable="
				+ classAvailable + ", bookingPolicies=" + bookingPolicies + ", classWithFare=" + classWithFare + "]";
	}

	public busEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public busEntity(Long busId, String busName, String source, String destination, String boardingPoint,
			String droppingPoint, String departureDate, String departureTime, String amenities, String coachType,
			String totalAvailableSeats, String classAvailable, String bookingPolicies, String classWithFare) {
		super();
		this.busId = busId;
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

	


}
