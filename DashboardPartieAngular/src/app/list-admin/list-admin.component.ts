import { Component } from '@angular/core';
import { Admin } from '../Model/Admin.model';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent {
  listAdmin : Admin[]
  p:number=1;
  collection:any[];
  searchName: string = '';
  
  constructor(private service:CrudService,private router:Router) { }
  //supprimer
  get filteredAdmin(): Admin[] {// Step 4
    return this.listAdmin.filter(admin => admin.nom.toLowerCase().includes(this.searchName.toLowerCase()));
  }
  DeleteAdmin(admin: Admin){
    if(confirm("Voulez vous supprimer cet etudiant avec l'ID " + admin.id + " ?")) {
     
      this.service.onDeleteAdmin(admin.id).subscribe(() => {
        this.router.navigate(['/listAdmin']).then(() => {
          window.location.reload()
        })
      })}}
  ngOnInit(): void {
    this.service.getAdmin().subscribe(admin => {
      this.listAdmin = admin
    })
  }

}
