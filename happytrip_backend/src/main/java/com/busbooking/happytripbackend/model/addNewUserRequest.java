package com.busbooking.happytripbackend.model;

public class addNewUserRequest {

	
	private String userName;
	
	private String emailId;
	
	private String phoneNumber;

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

	public addNewUserRequest(String userName, String emailId, String phoneNumber) {
		super();
		this.userName = userName;
		this.emailId = emailId;
		this.phoneNumber = phoneNumber;
	}

	@Override
	public String toString() {
		return "addNewUserRequest [userName=" + userName + ", emailId=" + emailId + ", phoneNumber=" + phoneNumber
				+ "]";
	}

	public addNewUserRequest() {
		super();
		// TODO Auto-generated constructor stub
	}



	
	
}
