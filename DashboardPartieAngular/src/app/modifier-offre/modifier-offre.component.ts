import { Component } from '@angular/core';
import { Offre } from '../Model/Offre.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-offre',
  templateUrl: './modifier-offre.component.html',
  styleUrls: ['./modifier-offre.component.css']
})
export class ModifierOffreComponent {
  updateForm: FormGroup;
  id: number;
  currentProduit = new Offre();
  userFile: any;
  public imagePath: any;
  imgURL: any = '';
  public message!: string;

  constructor(
    private fb: FormBuilder,
    private service: CrudService,
    private route: Router,
    private router: ActivatedRoute
  ) {
    let formControls = {
      nom: new FormControl('', [
        Validators.required,
      ]),
      image: new FormControl('', [
        Validators.required,
      ]),
      prix: new FormControl('', [
        Validators.required,
      ]),
      dateDeb: new FormControl('', [
        Validators.required,
      ]),
      dateFin: new FormControl('', [
        Validators.required,
      ]),
      tel: new FormControl('', [
        Validators.required,
      ]),
      adresse: new FormControl('', [
        Validators.required,
      ]),
    };

    this.updateForm = this.fb.group(formControls);
  }

  get nom() { return this.updateForm.get('nom'); }
  get image() { return this.updateForm.get('image'); }
  get prix() { return this.updateForm.get('prix'); }
  get dateDeb() { return this.updateForm.get('dateDeb'); }
  get dateFin() { return this.updateForm.get('dateFin'); }
  get tel() { return this.updateForm.get('tel'); }
  get adresse() { return this.updateForm.get('adresse'); }

  ngOnInit(): void {
    let idEvent = this.router.snapshot.params['id'];
    this.id = idEvent;

    this.service.findProduitById(idEvent).subscribe((result) => {
      let event = result;
      console.log(event);
      this.updateForm.patchValue({
        nom: event.nom,
        image: event.image,
        prix: event.prix,
        dateDeb: event.dateDeb,
        dateFin: event.dateFin,
        tel: event.tel,
        adresse: event.adresse
      });
    });
  }

  updateOffre() {
    let data = this.updateForm.value;

    let offre = new Offre(
      this.id,
      data.nom,
      this.imgURL,
      data.prix,
      data.dateDeb,
      data.dateFin,
      data.tel,
      data.adresse
    );
    console.log(offre);
    console.log(data);
    this.service.updateOffre(this.id, offre).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/listOffre']);
    });
  }

  //upload Image
  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
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
