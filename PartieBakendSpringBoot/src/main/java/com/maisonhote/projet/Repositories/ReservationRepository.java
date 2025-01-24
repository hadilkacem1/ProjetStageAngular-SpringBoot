package com.maisonhote.projet.Repositories;

import com.maisonhote.projet.Entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {
    List<Reservation> findByClientId(Long id);
}
