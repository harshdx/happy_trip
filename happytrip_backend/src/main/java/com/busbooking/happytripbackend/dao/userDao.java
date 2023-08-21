package com.busbooking.happytripbackend.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.busbooking.happytripbackend.entity.busEntity;
import com.busbooking.happytripbackend.entity.seatAvailabilityEntity;
import com.busbooking.happytripbackend.entity.userEntity;

@Repository
public interface userDao extends JpaRepository<userEntity, Long>{

	
	

}
