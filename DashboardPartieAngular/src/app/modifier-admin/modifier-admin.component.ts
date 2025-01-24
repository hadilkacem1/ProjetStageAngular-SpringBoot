import { Component } from '@angular/core';
import { Admin } from '../Model/Admin.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-admin',
  templateUrl: './modifier-admin.component.html',
  styleUrls: ['./modifier-admin.component.css']
})
export class ModifierAdminComponent {
  updateForm: FormGroup;
  id: number;
  currentAdmin = new Admin();
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
      role: new FormControl('', [
        Validators.required,
      ]),
    };

    this.updateForm = this.fb.group(formControls);
  }

  get nom() { return this.updateForm.get('nom'); }
  get prenom() { return this.updateForm.get('prenom'); }
  get email() { return this.updateForm.get('email'); }
  get mdp() { return this.updateForm.get('mdp'); }
  get role() { return this.updateForm.get('role'); }

  ngOnInit(): void {
    let idAdmin = this.router.snapshot.params['id'];
    this.id = idAdmin;

    this.service.findAdminById(idAdmin).subscribe((result) => {
      let admin = result;
      console.log(admin);
      this.updateForm.patchValue({
        nom: admin.nom,
        prenom: admin.prenom,
        email: admin.email,
        mdp: admin.mdp,
        role: admin.role
      });
    });
  }

  updateAdmin() {
    let data = this.updateForm.value;

    let admin = new Admin(
      this.id,
      data.nom,
      data.prenom,
      data.email,
      data.mdp,
      data.role
    );

    console.log(admin);
    console.log(data);
    this.service.updateAdmin(this.id, admin).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/listAdmin']);
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
