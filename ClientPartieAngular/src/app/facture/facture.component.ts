import { Component } from '@angular/core';
import { Reservation } from '../model/Reservation.model';
import { Offre } from '../model/Offre.model';
import { CrudService } from '../service/crud-service.service';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {
  offreDetails: Offre;
  reservationDetails: Reservation;

  constructor(private service: CrudService, private route: ActivatedRoute, private router: Router) { } // Add Router to constructor

  ngOnInit(): void {
    const idOffre = +this.route.snapshot.paramMap.get('idOffre');

    // Obtenez l'ID de la réservation à partir des paramètres de l'URL
    const idReservation = +this.route.snapshot.paramMap.get('idReservation');

    this.service.getOffreDetails(idOffre)
      .subscribe((offre: Offre) => {
        this.offreDetails = offre;
      });

    this.service.getReservationDetails(idReservation)
      .subscribe((reservation: Reservation) => {
        this.reservationDetails = reservation;
      });
  }

  confirmerReservation(): void {
    const idReservation = this.reservationDetails.id;
  
    this.service.confirmerReservation(idReservation)
      .subscribe((reservation: Reservation) => {
        this.reservationDetails = reservation;
  
        console.log('Before Navigation:', this.router.url);
this.router.navigate(['/facture', this.reservationDetails.id, this.reservationDetails.offre.id]);
console.log('After Navigation:', this.router.url);

      });
  }
  
  
}
