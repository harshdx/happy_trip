package com.busbooking.happytripbackend.model;

public class addSeatAvailabilityRequest {

	private Long busId;
	
	private String seatsData;

	public Long getBusId() {
		return busId;
	}

	public void setBusId(Long busId) {
		this.busId = busId;
	}

	public String getSeatsData() {
		return seatsData;
	}

	public void setSeatsData(String seatsData) {
		this.seatsData = seatsData;
	}

	@Override
	public String toString() {
		return "addSeatAvailabilityRequest [busId=" + busId + ", seatsData=" + seatsData + "]";
	}

	public addSeatAvailabilityRequest(Long busId, String seatsData) {
		super();
		this.busId = busId;
		this.seatsData = seatsData;
	}

	public addSeatAvailabilityRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	
}
