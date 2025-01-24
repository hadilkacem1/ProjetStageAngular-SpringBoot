import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { CrudService } from '../service/crud-service.service';
import { Router } from '@angular/router';
import { Client } from '../model/Client.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  ClientForm: FormGroup;
  isSubmitDisabled: boolean = true;

  constructor(private service: CrudService, private router: Router, private fb: FormBuilder, private toast: NgToastService) {
    this.ClientForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.minLength(8)]],
      tel: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      adresse: ['', [Validators.required]]
    });

    this.ClientForm.valueChanges.subscribe(() => {
      this.isSubmitDisabled = this.ClientForm.invalid;
    });
  }

  // Les getters pour faciliter l'accès aux contrôles du formulaire
  get nom() { return this.ClientForm.get('nom'); }
  get prenom() { return this.ClientForm.get('prenom'); }
  get email() { return this.ClientForm.get('email'); }
  get mdp() { return this.ClientForm.get('mdp'); }
  get tel() { return this.ClientForm.get('tel'); }
  get adresse() { return this.ClientForm.get('adresse'); }

  addNewClient() {
    if (this.ClientForm.invalid) {
      this.toast.info({
        detail: 'Remplissez tous les champs du formulaire',
        summary: 'Erreur de formulaire',
      });
      return;
    }

    let data = this.ClientForm.value;
    let client = new Client(undefined, data.nom, data.prenom, data.email, data.mdp, data.tel, data.adresse);

    this.service.addclient(client).subscribe(
      res => {
        console.log(res);
        this.toast.success({
          detail: 'Message envoyé avec succès',
          summary: 'Succès',
        });
        this.router.navigate(['/login']);
      },
      err => {
        console.log(err);
        this.toast.error({
          detail: 'Problème de serveur',
          summary: 'Erreur serveur',
        });
      }
    );
  }

  ngOnInit(): void { }
}
