import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Client } from '../Model/Client.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent {
  ClientForm:FormGroup
  constructor(private service :CrudService,private router:Router,private fb:FormBuilder,private toast:NgToastService) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,]),
      prenom: new FormControl('',[
        Validators.required,]),
        email: new FormControl('',[
          Validators.required,]),
      mdp: new FormControl('',[
          Validators.required,
        Validators.email]),
        tel: new FormControl('',[
          Validators.required,
        Validators.email]),
      adresse: new FormControl('',[
        Validators.required,]),}
     this.ClientForm = this.fb.group(formControls)
   }
   get nom() {return this.ClientForm.get('nom');} 
  get prenom() { return this.ClientForm.get('prenom');}
  get email() { return this.ClientForm.get('email');}
  get mdp() {return this.ClientForm.get('mdp');}
  get tel() {return this.ClientForm.get('tel');}
  get adresse() {return this.ClientForm.get('adresse');}
  
   addNewClient() {
    let data = this.ClientForm.value;
    console.log(data);
    let client = new Client(
     undefined, data.nom,data.prenom,data.email,data.mdp,data.tel,data.adresse);
    console.log(client);
    
    if (
      data.nom == 0 ||
      data.prenom == 0||
      data.email == 0 ||
      data.mdp == 0 ||
      data.tel == 0 ||
      data.adresse == 0 
    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    } else {
    this.service.addclient(client).subscribe(
      res=>{
        console.log(res);
        this.toast.success({
          detail: 'Succes Message',
          summary: 'Message est Envoyée',
        });
        
      //  this.router.navigate(['/listAdmin']);
      },
      err=>{
        console.log(err);
        this.toast.error({
          detail: 'Error Message',
          summary: 'Probléme de Serveur',
        }); }
    )
  
    }
   }
  
  
    ngOnInit(): void {
    

    }}