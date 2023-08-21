package com.busbooking.happytripbackend.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.busbooking.happytripbackend.entity.seatAvailabilityEntity;
import com.busbooking.happytripbackend.entity.ticketEntity;

@Repository
public interface ticketDao extends JpaRepository<ticketEntity, Long>{

	@Query("select te from ticketEntity te where te.ticketId=?1 ")
	public ticketEntity getTicketInfUsingTicketId(String ticketId);
	
	@Query("select te from ticketEntity te where te.busId=?1 and te.ticketStatus='Active'")
	public List<ticketEntity> getPassengerDetailByBusId(String busId);

	@Modifying
	@Transactional
//	@Query("update ticketEntity te set te.ticketStatus='cancelled', te.cancellationDate= CURRENT_TIMESTAMP, te.refundedAmount= IF(DATEDIFF(CURRENT_TIMESTAMP,te.departureDate)>=3, 70*te.totalAmountPaid/100, 90*te.totalAmountPaid/100)")
	@Query(value="UPDATE happytrip.ticket SET ticket_status='cancelled',cancellation_date=CURRENT_TIMESTAMP, refunded_amount= IF(DATEDIFF(departure_date,CURRENT_TIMESTAMP)>=3, 90*total_amount_paid/100, 70*total_amount_paid/100 ) WHERE ticket_Id=?1", nativeQuery = true)
	public int cancelTicket(String ticketId);


}
