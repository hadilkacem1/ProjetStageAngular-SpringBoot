import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import {HttpClientModule} from '@angular/common/http';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { ListOffreComponent } from './list-offre/list-offre.component';
import { ListClientComponent } from './list-client/list-client.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AjouterOffreComponent } from './ajouter-offre/ajouter-offre.component';
import { LoginComponent } from './login/login.component';
import { ModifierOffreComponent } from './modifier-offre/modifier-offre.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { HomeComponent } from './home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';




@NgModule({
  declarations: [
    AppComponent,
    AjouterAdminComponent,
    AjouterClientComponent,
    ListAdminComponent,
    ListContactComponent,
    ListOffreComponent,
    ListClientComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    AjouterOffreComponent,
    LoginComponent,
    ModifierOffreComponent,
    ReservationComponent,
    ModifierAdminComponent,
    HomeComponent,
    ModifierClientComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
    HttpClientModule ,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
