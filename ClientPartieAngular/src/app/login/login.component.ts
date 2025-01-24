import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CrudService } from '../service/crud-service.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Client } from '../model/Client.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private service:CrudService,
    private router:Router,private toast:NgToastService
  ) { 
    let formControls = {
      email: new FormControl('',[
        Validators.required,
        Validators.email
        
      ]),
      mdp: new FormControl('',[
        Validators.required,
       
      ])
    }

    this.loginForm = this.fb.group(formControls)
  }

  get email() { return this.loginForm.get('email') }
  get mdp() { return this.loginForm.get('mdp') }
 
  login() { 
    let data = this.loginForm.value;
    console.log(data);
    let client = new Client(null,null,null,data.email,data.mdp,null,null);
    console.log(client);
  
    if (
  
      data.email == 0 ||
      data.mdp == 0
    )
    {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    } else {
  
      this.service.loginClient(client)
          this.toast.success({
            detail: 'Error Message',
            summary: 'Bienvenue',
          });
          
        }
     
      
    }
    ngOnInit(): void {
      
    }
     
}
