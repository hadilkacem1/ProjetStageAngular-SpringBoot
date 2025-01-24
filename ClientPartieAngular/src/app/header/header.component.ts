import { Component } from '@angular/core';
import { CrudService } from '../service/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn:boolean;
  clientId: number=1; 
  constructor(private service:CrudService,private router:Router) {
   
   }
  logout(){
    console.log("logout");
    localStorage.clear()
    this.router.navigate(['']);
    
  }

  setClientId(newClientId: number) {
    this.clientId = newClientId;
  }

  ngOnInit(): void {
   
  
    this.isLoggedIn=this.service.isLoggedIn();
  }


  
}
