package com.busbooking.happytripbackend.entity;

import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "seatavailability")
public class seatAvailabilityEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Id")
	private Long Id;
	
	@Column(name = "bus_Id")
	private Long busId;
	
	@Column(name = "seats_data")
	private String seatsData;

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

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
		return "seatAvailabilityEntity [Id=" + Id + ", busId=" + busId + ", seatsData=" + seatsData + "]";
	}

	public seatAvailabilityEntity(Long id, Long busId, String seatsData) {
		super();
		Id = id;
		this.busId = busId;
		this.seatsData = seatsData;
	}

	public seatAvailabilityEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	
	
}
