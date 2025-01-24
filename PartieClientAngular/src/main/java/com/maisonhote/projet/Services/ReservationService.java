package com.maisonhote.projet.Services;

import com.maisonhote.projet.Entity.Reservation;
import com.maisonhote.projet.beans.CommandeRq;

import java.util.List;
import java.util.Optional;

public interface ReservationService {
    Reservation ajouterReservation(CommandeRq commandeRq);
    List<Reservation>ListReservation(Long id);
    Optional<Reservation>getReservationById(Long id);
    List<Reservation>ListOffreByClient(Long id);
    public Reservation confirmerReservation(Long idReservation);
    public Reservation getReservationDetails(Long idReservation);
    public void annulerEtSupprimerReservation(Long idReservation);
    public List<Reservation> afficherreservation();
    public void supprimerreservation(Long id);
}
