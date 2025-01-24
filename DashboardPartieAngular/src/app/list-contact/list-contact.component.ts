import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Contact } from '../Model/Contact.model';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent {
  listContact : Contact[]
  p:number=1;
  collection:any[];
  searchName: string = '';
  
  constructor(private service:CrudService,private router:Router) { }
  //supprimer

  get filteredContacts(): Contact[] { // Step 4
    return this.listContact.filter(contact => contact.nom.toLowerCase().includes(this.searchName.toLowerCase()));
  }
  DeleteContact(contact: Contact){
    if(confirm("Voulez vous supprimer cet etudiant avec l'ID " + contact.id + " ?")) {
     
      this.service.onDeleteContact(contact.id).subscribe(() => {
        this.router.navigate(['/listContact']).then(() => {
          window.location.reload()
        })
      })}}
  ngOnInit(): void {
    this.service.getContact().subscribe(contact => {
      this.listContact= contact
    })
  }

}
