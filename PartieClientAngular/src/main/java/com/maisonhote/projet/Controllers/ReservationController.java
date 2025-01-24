package com.maisonhote.projet.Controllers;

import com.maisonhote.projet.Entity.Contact;
import com.maisonhote.projet.Entity.Reservation;
import com.maisonhote.projet.Services.ReservationService;
import com.maisonhote.projet.beans.CommandeRq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping(value ="/reservation")
public class ReservationController {
    @Autowired
    ReservationService reservationService;

    @RequestMapping(method= RequestMethod.POST)
    public Reservation ajouterReservation(@RequestBody CommandeRq commandeRq){
        return reservationService.ajouterReservation(commandeRq);
    }

    @RequestMapping("Get-All-ByIdClient/{id}")
    public List<Reservation>ListReservationByClient(@PathVariable Long id){
        return reservationService.ListReservation(id);
    }

    @RequestMapping(value="/{id}",method=RequestMethod.GET)
    public Optional<Reservation> GetReservationById(@PathVariable Long id){
        Optional<Reservation> reservation=reservationService.getReservationById(id);
        return reservation;
    }

    // Dans votre contrôleur
    @PostMapping("/confirmer/{idReservation}")
    public ResponseEntity<Reservation> confirmerReservation(@PathVariable Long idReservation) {
        Reservation reservation = reservationService.confirmerReservation(idReservation);

        if (reservation != null) {
            return ResponseEntity.ok(reservation);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/details/{idReservation}")
    public ResponseEntity<Reservation> getReservationDetails(@PathVariable Long idReservation) {
        Reservation reservation = reservationService.getReservationDetails(idReservation);
        return ResponseEntity.ok(reservation);
    }
    @DeleteMapping("/supprimer/{id}")
    public ResponseEntity<String> deleteReservation(@PathVariable Long id) {
       reservationService.supprimerreservation(id);
        return ResponseEntity.ok("La reservation a été supprimé avec succès.");
    }

    @PostMapping("/annuler/{id}")
    public ResponseEntity<String> annulerReservation(@PathVariable Long id) {
        reservationService.annulerEtSupprimerReservation(id);
        return ResponseEntity.ok("Réservation annulée et supprimée avec succès.");
    }
    @RequestMapping(method = RequestMethod.GET )
//RequestBody:tekhdh vrb tabaathhom lel contrl kn sar c bon snn erreur
    public List<Reservation> afficherreservation(){
        return reservationService.afficherreservation();

    }



}
