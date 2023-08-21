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

@Entity
@Table(name = "ticket")
public class ticketEntity {

	@Id
	@Column(name = "ticket_Id")
	private String ticketId;
	
	@Column(name = "bus_name")
	private String busName;
	
	@Column(name = "source")
	private String source;
	
	@Column(name = "destination")
	private String destination;
	
	@Column(name = "boarding_point")
	private String boardingPoint;
	
	@Column(name = "dropping_point")
	private String droppingPoint;

	@Column(name = "departure_date")
	private String departureDate;
	
	@Column(name = "departure_time")
	private String departureTime;
	
	
	@Column(name = "coach_type")
	private String coachType;

	@Column(name = "user_id")
	private String userId;
	
	
	@Column(name = "user_name")
	private String userName;
	
	@Column(name = "email_Id")
	private String emailId;
	
	
	@Column(name = "phone_number")
	private String phoneNumber;
	
	@Column(name = "ticket_status")
	private String ticketStatus;
	
	@Column(name = "cancellation_date")
	private String cancellationDate;
	
	
	@Column(name = "refunded_amount")
	private String refundedAmount;
	
	@Column(name = "bus_Id")
	private String busId;
	
	@Column(name = "seats_booked")
	private String seatsBooked;
	
	@Column(name = "created_date")
	private Date createdDate;
	
	
	@Column(name = "total_amount_paid")
	private String totalAmountPaid;


	public String getTicketId() {
		return ticketId;
	}


	public void setTicketId(String ticketId) {
		this.ticketId = ticketId;
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


	public String getTicketStatus() {
		return ticketStatus;
	}


	public void setTicketStatus(String ticketStatus) {
		this.ticketStatus = ticketStatus;
	}


	public String getCancellationDate() {
		return cancellationDate;
	}


	public void setCancellationDate(String cancellationDate) {
		this.cancellationDate = cancellationDate;
	}


	public String getRefundedAmount() {
		return refundedAmount;
	}


	public void setRefundedAmount(String refundedAmount) {
		this.refundedAmount = refundedAmount;
	}


	public String getBusId() {
		return busId;
	}


	public void setBusId(String busId) {
		this.busId = busId;
	}


	public String getSeatsBooked() {
		return seatsBooked;
	}


	public void setSeatsBooked(String seatsBooked) {
		this.seatsBooked = seatsBooked;
	}


	public Date getCreatedDate() {
		return createdDate;
	}


	public void setCreatedDate(Date date) {
		this.createdDate = date;
	}


	public String getTotalAmountPaid() {
		return totalAmountPaid;
	}


	public void setTotalAmountPaid(String totalAmountPaid) {
		this.totalAmountPaid = totalAmountPaid;
	}


	@Override
	public String toString() {
		return "ticketEntity [ticketId=" + ticketId + ", busName=" + busName + ", source=" + source + ", destination="
				+ destination + ", boardingPoint=" + boardingPoint + ", droppingPoint=" + droppingPoint
				+ ", departureDate=" + departureDate + ", departureTime=" + departureTime + ", coachType=" + coachType
				+ ", userId=" + userId + ", userName=" + userName + ", emailId=" + emailId + ", phoneNumber="
				+ phoneNumber + ", ticketStatus=" + ticketStatus + ", cancellationDate=" + cancellationDate
				+ ", refundedAmount=" + refundedAmount + ", busId=" + busId + ", seatsBooked=" + seatsBooked
				+ ", createdDate=" + createdDate + ", totalAmountPaid=" + totalAmountPaid + "]";
	}


	public ticketEntity(String ticketId, String busName, String source, String destination, String boardingPoint,
			String droppingPoint, String departureDate, String departureTime, String coachType, String userId,
			String userName, String emailId, String phoneNumber, String ticketStatus, String cancellationDate,
			String refundedAmount, String busId, String seatsBooked, Date createdDate, String totalAmountPaid) {
		super();
		this.ticketId = ticketId;
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
		this.ticketStatus = ticketStatus;
		this.cancellationDate = cancellationDate;
		this.refundedAmount = refundedAmount;
		this.busId = busId;
		this.seatsBooked = seatsBooked;
		this.createdDate = createdDate;
		this.totalAmountPaid = totalAmountPaid;
	}


	public ticketEntity() {
		super();
		// TODO Auto-generated constructor stub
	}


	

	
	
	
}