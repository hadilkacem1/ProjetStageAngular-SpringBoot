package com.maisonhote.projet.Services;

import com.maisonhote.projet.Entity.Client;
import com.maisonhote.projet.Entity.Contact;
import com.maisonhote.projet.Entity.Offre;
import com.maisonhote.projet.Entity.Reservation;
import com.maisonhote.projet.Repositories.ReservationRepository;
import com.maisonhote.projet.beans.CommandeRq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationServiceImpl implements ReservationService{
    @Autowired
    OffreService offreService;
    @Autowired
    ClientService clientService;
    @Autowired
    ReservationRepository reservationRepository;

    @Override
    public Reservation ajouterReservation(CommandeRq commandeRq) {
        Optional<Offre>offres=offreService.afficherOffreById(commandeRq.getIdOffre());
        Optional<Client>clients=clientService.afficherClientById(commandeRq.getIdClient());
        if (offres.isPresent()&& clients.isPresent()){
            Reservation reservation=new Reservation();
            reservation.setOffre(offres.get());
            reservation.setClient(clients.get());
            return reservationRepository.save(reservation);

        }
        else {
            return null;
        }

    }

    @Override
    public Reservation confirmerReservation(Long idReservation) {
        Optional<Reservation> reservationOptional = reservationRepository.findById(idReservation);

        if (reservationOptional.isPresent()) {
            Reservation reservation = reservationOptional.get();
            reservation.setConfirmee(true);
      // Nouvelle ligne pour indiquer que la réservation n'est pas encore payée
            return reservationRepository.save(reservation);
        } else {
            return null;
        }
    }

    @Override
    public void annulerEtSupprimerReservation(Long idReservation) {
        Optional<Reservation> reservationOptional = reservationRepository.findById(idReservation);

        if (reservationOptional.isPresent()) {
            Reservation reservation = reservationOptional.get();
            reservation.setAnnulee(true); // Marquer la réservation comme annulée
            reservation.setConfirmee(false); // Assurez-vous que la réservation ne soit pas confirmée
            reservationRepository.delete(reservation); // Supprimer la réservation de la base de données
        }
    }




    public Reservation getReservationDetails(Long idReservation) {
        Optional<Reservation> reservationOptional = reservationRepository.findById(idReservation);

        if (reservationOptional.isPresent()) {
            return reservationOptional.get();
        } else {
            throw new RuntimeException("Réservation introuvable");
        }
    }
    @Override
    public void supprimerreservation(Long id) {
        reservationRepository.deleteById(id);
    }
    @Override
    public List<Reservation> afficherreservation() {
        return  reservationRepository.findAll();
    }

    @Override
    public List<Reservation> ListReservation(Long id) {
        return reservationRepository.findByClientId(id);
    }

    @Override
    public Optional<Reservation> getReservationById(Long id) {
        return reservationRepository.findById(id);
    }

    @Override
    public List<Reservation> ListOffreByClient(Long id) {
        return reservationRepository.findByClientId(id);
    }
}
