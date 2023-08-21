package com.busbooking.happytripbackend.model;

import java.util.ArrayList;

public class cancelTicketRequest {

	private String busId;
	
	private String ticketId;
	
	private ArrayList<String> bookedSeats;

	public String getBusId() {
		return busId;
	}

	public void setBusId(String busId) {
		this.busId = busId;
	}

	public String getTicketId() {
		return ticketId;
	}

	public void setTicketId(String ticketId) {
		this.ticketId = ticketId;
	}

	public ArrayList<String> getBookedSeats() {
		return bookedSeats;
	}

	public void setBookedSeats(ArrayList<String> bookedSeats) {
		this.bookedSeats = bookedSeats;
	}

	public cancelTicketRequest(String busId, String ticketId, ArrayList<String> bookedSeats) {
		super();
		this.busId = busId;
		this.ticketId = ticketId;
		this.bookedSeats = bookedSeats;
	}

	public cancelTicketRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "cancelTicketRequest [busId=" + busId + ", ticketId=" + ticketId + ", bookedSeats=" + bookedSeats + "]";
	}


	
	
	
}
