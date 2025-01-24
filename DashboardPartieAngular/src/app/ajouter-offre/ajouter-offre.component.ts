import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Offre } from '../Model/Offre.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-ajouter-offre',
  templateUrl: './ajouter-offre.component.html',
  styleUrls: ['./ajouter-offre.component.css']
})
export class AjouterOffreComponent {
  userFile: any;
  message: any;
  imagePath: any;
  imgURL: any;
  OffreForm: FormGroup;

  constructor(
    private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast: NgToastService
  ) {
    let formControls = {
      nom: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      prix: new FormControl('', [Validators.required]),
      dateDeb: new FormControl('', [Validators.required]),
      dateFin: new FormControl('', [Validators.required]),
      tel: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
    };
    this.OffreForm = this.fb.group(formControls);
  }

  get nom() {
    return this.OffreForm.get('nom');
  }

  get image() {
    return this.OffreForm.get('image');
  }

  get prix() {
    return this.OffreForm.get('prix');
  }

  get dateDeb() {
    return this.OffreForm.get('dateDeb');
  }

  get dateFin() {
    return this.OffreForm.get('dateFin');
  }

  get tel() {
    return this.OffreForm.get('tel');
  }

  get adresse() {
    return this.OffreForm.get('adresse');
  }

  addNewOffre() {
    let data = this.OffreForm.value;
    console.log(data);
    let offre = new Offre(
      undefined,
      data.nom,
      this.imgURL,
      data.prix,
      data.dateDeb,
      data.dateFin,
      data.tel,
      data.adresse
    );
    console.log(offre);

    if (
      data.nom === '' ||
      !this.imgURL ||
      data.prix === '' ||
      data.dateDeb === '' ||
      data.dateFin === '' ||
      data.tel === ''
    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Remplir votre champs',
      });
    } else {
      this.service.addoffre(offre).subscribe(
        (res) => {
          console.log(res);
          this.toast.success({
            detail: 'Succes Message',
            summary: 'Message est Envoyée',
          });

          // this.router.navigate(['/listAdmin']);
        },
        (err) => {
          console.log(err);
          this.toast.error({
            detail: 'Error Message',
            summary: 'Probléme de Serveur',
          });
        }
      );
    }
  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;

      var mimeType = event.target.files[0].type;
      if (!mimeType.match(/image\/*/)) {
        this.message = 'Only images are supported.';
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }
}
