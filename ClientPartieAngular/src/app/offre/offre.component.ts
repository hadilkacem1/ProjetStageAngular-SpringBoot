import { Component, OnInit } from '@angular/core';
import { Offre } from '../model/Offre.model';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  listOffre: Offre[];
  isLoggedIn: boolean;
  offres: Offre[] = [];
  p: number = 1;
  collection: any[];
  messageCommande = "";
  reservedOffers: number[] = [];

  constructor(private service: CrudService, private router: Router) {}

  DeleteOffre(offre: Offre) {
    if (confirm("Voulez vous supprimer cet offre avec l'ID " + offre.id + " ?")) {
      this.service.onDeleteOffre(offre.id).subscribe(() => {
        this.router.navigate(['/listoffre']).then(() => {
          window.location.reload();
        });
      });
    }
  }

  ngOnInit(): void {
    this.service.getOffre().subscribe(offre => {
      this.listOffre = offre;
      this.isLoggedIn = this.service.isLoggedIn();
    });
  }

  reserver(offre: Offre) {
    const offreId = offre.id;

    if (this.reservedOffers.includes(offreId)) {
      Swal.fire({
        icon: 'error',
        title: 'Vous avez déjà réservé cette offre',
        text: 'Vous ne pouvez pas réserver la même offre plus d\'une fois.'
      });
      return;
    }

    const rq: any = {};
    rq.idClient = Number(localStorage.getItem("idC"));
    rq.idOffre = offreId;

    this.service.reserverFromApi(rq).subscribe((data: any) => {
      this.router.navigate(['mes-reservations']);
      this.messageCommande = `<div class="alert alert-success" role="alert">Réservé avec succès</div>`;
      this.reservedOffers.push(offreId);
      Swal.fire({
        icon: 'success',
        title: 'Réservé avec succès',
        text: 'La réservation a été effectuée avec succès.'
      });
    }, err => {
      this.messageCommande = `<div class="alert alert-warning" role="alert">Erreur, Veuillez réessayer !!</div>`;
    });

    setTimeout(() => {
      this.messageCommande = "";
    }, 3000);
  }

  connexion() {
    this.router.navigate(['/login']);
  }

  isOffreDejaReservee(offreId: number): boolean {
    return this.reservedOffers.includes(offreId);
  }
}
