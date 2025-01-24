import { Component, OnInit } from '@angular/core';
import { Offre } from '../model/Offre.model';
import { CrudService } from '../service/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listOffre!: Offre[];
  topFiveOffers: Offre[] = []; // Nouvelle variable

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.service.getOffre().subscribe(offres => {
      this.listOffre = offres;
      this.prepareTopFiveOffers();
    });
  }

  prepareTopFiveOffers() {
    // Obtenir les 5 premières offres de la liste
    this.topFiveOffers = this.listOffre.slice(0, 5);
  }
}
