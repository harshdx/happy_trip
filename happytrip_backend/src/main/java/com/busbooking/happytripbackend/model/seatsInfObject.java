package com.busbooking.happytripbackend.model;

public class seatsInfObject {

	public String fare;
	public String seatNo;
	public String userName;
//	@JsonProperty("class")
	public String className;
	public String email;
	public String phoneNo;
	public String status;
	public String getFare() {
		return fare;
	}
	public void setFare(String fare) {
		this.fare = fare;
	}
	public String getSeatNo() {
		return seatNo;
	}
	public void setSeatNo(String seatNo) {
		this.seatNo = seatNo;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "seatsInfObject [fare=" + fare + ", seatNo=" + seatNo + ", userName=" + userName + ", className="
				+ className + ", email=" + email + ", phoneNo=" + phoneNo + ", status=" + status + "]";
	}
	public seatsInfObject(String fare, String seatNo, String userName, String className, String email, String phoneNo,
			String status) {
		super();
		this.fare = fare;
		this.seatNo = seatNo;
		this.userName = userName;
		this.className = className;
		this.email = email;
		this.phoneNo = phoneNo;
		this.status = status;
	}
	public seatsInfObject() {
		super();
		// TODO Auto-generated constructor stub
	}

	
}
