import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { ListOffreComponent } from './list-offre/list-offre.component';
import { ListClientComponent } from './list-client/list-client.component';
import { AjouterOffreComponent } from './ajouter-offre/ajouter-offre.component';
import { LoginComponent } from './login/login.component';
import { ModifierOffreComponent } from './modifier-offre/modifier-offre.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AuthGuard } from './service/auth-guard.service';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { HomeComponent } from './home/home.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';



const routes: Routes = [
  { path: '', component: AjouterAdminComponent,canActivate:[AuthGuard]},
  { path: 'listAdmin', component: ListAdminComponent,canActivate:[AuthGuard]} ,
 { path: 'listContact', component: ListContactComponent,canActivate:[AuthGuard]},
 { path: 'listOffre', component: ListOffreComponent,canActivate:[AuthGuard] },
 { path: 'listClient', component: ListClientComponent,canActivate:[AuthGuard]},
 { path: 'modifierAdmin/:id', component: ModifierAdminComponent,canActivate:[AuthGuard]},
 { path: 'ajouterOffre', component: AjouterOffreComponent,canActivate:[AuthGuard] },
 { path: 'login', component: LoginComponent},
 { path: 'modifierOffre/:id', component: ModifierOffreComponent,canActivate:[AuthGuard]},
 { path: 'modifierClient/:id', component: ModifierClientComponent,canActivate:[AuthGuard]},
 { path: 'reservation', component: ReservationComponent,canActivate:[AuthGuard]},
 { path: 'home', component: HomeComponent,canActivate:[AuthGuard]}




  // Removed the colon after 'listAdmin'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
