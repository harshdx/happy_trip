package com.busbooking.happytripbackend.model;

public class validateAdminRequest {

	private String username;
	
	private String password;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "validateAdminRequest [username=" + username + ", password=" + password + "]";
	}

	public validateAdminRequest(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}

	public validateAdminRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
