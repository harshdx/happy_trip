package com.busbooking.happytripbackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.busbooking.happytripbackend.entity.adminEntity;

@Repository
public interface adminDao extends JpaRepository<adminEntity, Long>{

	@Query("select ae from adminEntity ae where ae.userName=?1 and ae.password=?2")
	adminEntity validateAdmin(String username, String password);

	
	

}
