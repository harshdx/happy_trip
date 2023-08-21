package com.busbooking.happytripbackend.dao;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.busbooking.happytripbackend.entity.busEntity;
import com.busbooking.happytripbackend.entity.seatAvailabilityEntity;

@Repository
public interface seatsDao extends JpaRepository<seatAvailabilityEntity, Long>{

	@Query("select sae from seatAvailabilityEntity sae where sae.busId=?1 ")
	public seatAvailabilityEntity getseatsData(Long busId);

	@Modifying
	@Transactional
	@Query("update seatAvailabilityEntity sae set sae.seatsData=?2 where sae.busId=?1 ")
	public int updateSeatsDataByBusId(Long busId, String seatsData);

	
	

}
