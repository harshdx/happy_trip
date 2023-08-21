package com.busbooking.happytripbackend.model;

public class addNewVoucherRequest {

	public String voucherStartDate;
	public String voucherEndDate;
	public String voucherStatus;
	public String voucherAmount;
	public String voucherCode;
	public String minimumAmount;
	public String discountPercent;
	public String getVoucherStartDate() {
		return voucherStartDate;
	}
	public void setVoucherStartDate(String voucherStartDate) {
		this.voucherStartDate = voucherStartDate;
	}
	public String getVoucherEndDate() {
		return voucherEndDate;
	}
	public void setVoucherEndDate(String voucherEndDate) {
		this.voucherEndDate = voucherEndDate;
	}
	public String getVoucherStatus() {
		return voucherStatus;
	}
	public void setVoucherStatus(String voucherStatus) {
		this.voucherStatus = voucherStatus;
	}
	public String getVoucherAmount() {
		return voucherAmount;
	}
	public void setVoucherAmount(String voucherAmount) {
		this.voucherAmount = voucherAmount;
	}
	public String getVoucherCode() {
		return voucherCode;
	}
	public void setVoucherCode(String voucherCode) {
		this.voucherCode = voucherCode;
	}
	public String getMinimumAmount() {
		return minimumAmount;
	}
	public void setMinimumAmount(String minimumAmount) {
		this.minimumAmount = minimumAmount;
	}
	public String getDiscountPercent() {
		return discountPercent;
	}
	public void setDiscountPercent(String discountPercent) {
		this.discountPercent = discountPercent;
	}
	@Override
	public String toString() {
		return "addNewVoucherRequest [voucherStartDate=" + voucherStartDate + ", voucherEndDate=" + voucherEndDate
				+ ", voucherStatus=" + voucherStatus + ", voucherAmount=" + voucherAmount + ", voucherCode="
				+ voucherCode + ", minimumAmount=" + minimumAmount + ", discountPercent=" + discountPercent + "]";
	}
	public addNewVoucherRequest(String voucherStartDate, String voucherEndDate, String voucherStatus,
			String voucherAmount, String voucherCode, String minimumAmount, String discountPercent) {
		super();
		this.voucherStartDate = voucherStartDate;
		this.voucherEndDate = voucherEndDate;
		this.voucherStatus = voucherStatus;
		this.voucherAmount = voucherAmount;
		this.voucherCode = voucherCode;
		this.minimumAmount = minimumAmount;
		this.discountPercent = discountPercent;
	}
	public addNewVoucherRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	
}
