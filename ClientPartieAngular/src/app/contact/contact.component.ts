import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../service/crud-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  ContactForm !: FormGroup;

  constructor(private fb: FormBuilder, private crudService: CrudService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.ContactForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sujet: [''],
      msg: ['', Validators.required],
    });
  }

  get nom() {
    return this.ContactForm.get('nom') as FormControl;
  }

  get email() {
    return this.ContactForm.get('email') as FormControl;
  }

  get sujet() {
    return this.ContactForm.get('sujet') as FormControl;
  }

  get msg() {
    return this.ContactForm.get('msg') as FormControl;
  }

  addNewContact() {
    if (this.ContactForm.invalid) {
      console.log("Form submitted!");
      return;
    }

    const data = this.ContactForm.value;

    this.crudService.addcontact(data).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Contact ajouté avec succès',
          text: 'Le contact a été ajouté avec succès.'
        });
        this.ContactForm.reset(); // Réinitialiser le formulaire après l'ajout
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Erreur lors de l\'ajout du contact',
          text: 'Veuillez contacter l\'administrateur pour plus d\'informations.'
        });
        console.error("Failed to add contact:", error);
      }
    );
  }
}
