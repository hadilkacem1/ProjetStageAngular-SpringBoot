import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud-service.service';
import { Reservation } from '../model/Reservation.model';
import { ActivatedRoute, Router } from '@angular/router'; // Added Router
import { Offre } from '../model/Offre.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-mesreservations',
  templateUrl: './mesreservations.component.html',
  styleUrls: ['./mesreservations.component.css']
})
export class MesreservationsComponent implements OnInit {
  reservations: Reservation[] = [];
  offreDetails: Offre;
  reservationDetails: Reservation;
  p: number = 1;
  collection: any[];

  constructor(private service: CrudService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const clientId = +localStorage.getItem("idC");

    if (clientId) {
      this.getReservationsByClient(clientId);
    } else {
      console.error("ID client non trouvé dans le stockage local.");
    }
  }
  confirmerReservation(idReservation: number): void {
    this.service.confirmerReservation(idReservation).subscribe(
      (reservationDetails: Reservation) => {
        console.log('Reservation Details:', reservationDetails);
        this.router.navigate(['/facture', reservationDetails.id, reservationDetails.offre.id]);
      },
      error => {
        console.error('Erreur lors de la confirmation de la réservation :', error);
      }
    );
    
    
  }
  
  getReservationsByClient(clientId: number): void {
    this.service.getReservationsByClientId(clientId)
      .subscribe((reservations: Reservation[]) => { 
        this.reservations = reservations;
      });
  }
  annulerReservation(id: number) {
    this.service.getReservationDetails(id).subscribe(
      (reservationDetails: Reservation) => {
        if (reservationDetails.confirmee) {
          Swal.fire({
            icon: 'error',
            title: 'Erreur lors de la récupération des détails de la réservation',
            text: 'Veuillez contacter l\'administrateur pour plus d\'informations.'
          });
          
        } else {
          this.service.annulerReservation(id).subscribe(
            response => {
              Swal.fire({
              
              }).then(() => {
                location.reload();
              });
            },
            error => {
              console.error('Erreur lors de la suppression de la réservation :', error);
            }
          );
        }
      },
      error => {
        Swal.fire({
          icon: 'success',
          title: 'Suppression réussie',
          text: 'La réservation a été supprimée avec succès.'
      
        }).then(() => {
          location.reload();
        });
      }
    );
  }
  
  
  
  
  
  
  
  

  getReservationDetails(idReservation: number): void {
    this.service.getReservationDetails(idReservation)
      .subscribe((reservationDetails: Reservation) => {
        this.reservationDetails = reservationDetails;
      });
  }

  
}
