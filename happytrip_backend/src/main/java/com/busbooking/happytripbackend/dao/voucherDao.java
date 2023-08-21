package com.busbooking.happytripbackend.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.busbooking.happytripbackend.entity.busEntity;
import com.busbooking.happytripbackend.entity.voucherEntity;

@Repository
public interface voucherDao extends JpaRepository<voucherEntity, Long>{

//	@Query("select be from busEntity be where be.source = ?1 and be.destination= ?2 and be.departureDate= ?3")
//	public List<busEntity> getAllBusesUsingRouteAndDate(String source, String destination, String date);
//	
//	@Query("select be from busEntity be where be.busId= ?1 ")
//	public busEntity getBusByBusId(Long busId);

}
