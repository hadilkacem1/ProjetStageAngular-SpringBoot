import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OffreComponent } from './offre/offre.component';
import { DetailoffreComponent } from './detailoffre/detailoffre.component';
import { MesreservationsComponent } from './mesreservations/mesreservations.component';
import { FactureComponent } from './facture/facture.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'Offre', component: OffreComponent},
  { path: 'offre/:id/details', component: DetailoffreComponent},
  { path: 'reservation/:clientId', component: MesreservationsComponent },
  { path: 'facture/:idReservation/:idOffre', component: FactureComponent }



   // Corrected 'component' to start with lowercase 'c'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
