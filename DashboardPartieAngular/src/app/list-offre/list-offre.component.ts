import { Component } from '@angular/core';
import { Offre } from '../Model/Offre.model';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.css']
})
export class ListOffreComponent {
  listOffre : Offre[]
  p:number=1;
  collection:any[];
  searchName: string = '';
  constructor(private service:CrudService,private router:Router) { }
  //supprimer

  get filteredOffre(): Offre[] {// Step 4
    return this.listOffre.filter(offre => offre.nom.toLowerCase().includes(this.searchName.toLowerCase()));
  }
  DeleteOffre(offre: Offre){
    if(confirm("Voulez vous supprimer cet etudiant avec l'ID " + offre.id + " ?")) {
     
      this.service.onDeleteOffre(offre.id).subscribe(() => {
        this.router.navigate(['/listOffre']).then(() => {
          window.location.reload()
        })
      })}}
  ngOnInit(): void {
    this.service.getOffre().subscribe(offre => {
      this.listOffre= offre
    })
  }
}
