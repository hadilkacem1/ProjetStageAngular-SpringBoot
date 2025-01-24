import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Admin } from '../Model/Admin.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
totaladmin:number=0
totalclient:number=0
totaloffre:number=0
constructor(private service:CrudService,private router:Router) { }
 ngOnInit():void{

  this.service.getAdmin().subscribe(admin=>
    {this.totaladmin=admin.length})
 
 this.service.getClient().subscribe(client=>
  {this.totalclient=client.length})

  this.service.getOffre().subscribe(offre=>
    {this.totaloffre=offre.length})
}

}