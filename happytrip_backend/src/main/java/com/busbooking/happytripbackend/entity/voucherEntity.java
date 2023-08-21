package com.busbooking.happytripbackend.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "voucher")
public class voucherEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "voucher_Id")
	private Long voucherId;
	
	@Column(name = "voucher_start_date")
	private String voucherStartDate;
	
	@Column(name = "voucher_end_date")
	private String voucherEndDate;
	
	
	@Column(name = "voucher_status")
	private String voucherStatus;
	
	@Column(name = "voucher_amount")
	private String voucherAmount;
	
	@Column(name = "voucher_code")
	private String voucherCode;
	
	@Column(name = "minimum_amount")
	private String minimumAmount;
	
	
	@Column(name = "Discount_percent")
	private String DiscountPercent;


	public Long getVoucherId() {
		return voucherId;
	}


	public void setVoucherId(Long voucherId) {
		this.voucherId = voucherId;
	}


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
		return DiscountPercent;
	}


	public void setDiscountPercent(String discountPercent) {
		DiscountPercent = discountPercent;
	}


	public voucherEntity() {
		super();
		// TODO Auto-generated constructor stub
	}


	public voucherEntity(Long voucherId, String voucherStartDate, String voucherEndDate, String voucherStatus,
			String voucherAmount, String voucherCode, String minimumAmount, String discountPercent) {
		super();
		this.voucherId = voucherId;
		this.voucherStartDate = voucherStartDate;
		this.voucherEndDate = voucherEndDate;
		this.voucherStatus = voucherStatus;
		this.voucherAmount = voucherAmount;
		this.voucherCode = voucherCode;
		this.minimumAmount = minimumAmount;
		DiscountPercent = discountPercent;
	}


	@Override
	public String toString() {
		return "voucher [voucherId=" + voucherId + ", voucherStartDate=" + voucherStartDate + ", voucherEndDate="
				+ voucherEndDate + ", voucherStatus=" + voucherStatus + ", voucherAmount=" + voucherAmount
				+ ", voucherCode=" + voucherCode + ", minimumAmount=" + minimumAmount + ", DiscountPercent="
				+ DiscountPercent + "]";
	}
	
	
}
