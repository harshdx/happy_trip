package com.busbooking.happytripbackend.model;

public class cancelTicketResponse {

	private String ticketId;
	
	private String busId;
	
	private String refundedAmount;
	
	private String cancelationDate;

	public String getTicketId() {
		return ticketId;
	}

	public void setTicketId(String ticketId) {
		this.ticketId = ticketId;
	}

	public String getBusId() {
		return busId;
	}

	public void setBusId(String busId) {
		this.busId = busId;
	}

	public String getRefundedAmount() {
		return refundedAmount;
	}

	public void setRefundedAmount(String refundedAmount) {
		this.refundedAmount = refundedAmount;
	}

	public String getCancelationDate() {
		return cancelationDate;
	}

	public void setCancelationDate(String cancelationDate) {
		this.cancelationDate = cancelationDate;
	}

	@Override
	public String toString() {
		return "cancelTicketResponse [ticketId=" + ticketId + ", busId=" + busId + ", refundedAmount=" + refundedAmount
				+ ", cancelationDate=" + cancelationDate + "]";
	}

	public cancelTicketResponse(String ticketId, String busId, String refundedAmount, String cancelationDate) {
		super();
		this.ticketId = ticketId;
		this.busId = busId;
		this.refundedAmount = refundedAmount;
		this.cancelationDate = cancelationDate;
	}

	public cancelTicketResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
