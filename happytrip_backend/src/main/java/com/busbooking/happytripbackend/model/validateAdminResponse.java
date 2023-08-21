package com.busbooking.happytripbackend.model;

public class validateAdminResponse {

	private String status;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "validateAdminResponse [status=" + status + "]";
	}

	public validateAdminResponse(String status) {
		super();
		this.status = status;
	}

	public validateAdminResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
