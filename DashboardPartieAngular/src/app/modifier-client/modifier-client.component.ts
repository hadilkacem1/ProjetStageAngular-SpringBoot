import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import { Client } from '../Model/Client.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.css']
})
export class ModifierClientComponent {

  updateForm: FormGroup;
  id: number;
  currentClient = new Client(); // Use the Client model here
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
      prenom: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      mdp: new FormControl('', [
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
  get prenom() { return this.updateForm.get('prenom'); }
  get email() { return this.updateForm.get('email'); }
  get mdp() { return this.updateForm.get('mdp'); }
  get tel() { return this.updateForm.get('tel'); }
  get adresse() { return this.updateForm.get('adresse'); }

  ngOnInit(): void {
    let idClient = this.router.snapshot.params['id']; // Assuming you pass the client ID in the URL
    this.id = idClient;

    this.service.findClientById(idClient).subscribe((result) => {
      let client = result;
      console.log(client);
      this.updateForm.patchValue({
        nom: client.nom,
        prenom: client.prenom,
        email: client.email,
        mdp: client.mdp,
        tel: client.tel,
        adresse: client.adresse
      });
    });
  }

  updateClient() {
    let data = this.updateForm.value;

    let client = new Client(
      this.id,
      data.nom,
      data.prenom,
      data.email,
      data.mdp,
      data.tel,
      data.adresse
    );

    console.log(client);
    console.log(data);
    this.service.updateClient(this.id, client).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/listClient']); // Assuming there's a route for the client list
    });
  }

  // Upload Image
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

