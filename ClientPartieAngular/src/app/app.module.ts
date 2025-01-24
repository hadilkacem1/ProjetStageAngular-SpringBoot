import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { OffreComponent } from './offre/offre.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailoffreComponent } from './detailoffre/detailoffre.component';
import { MesreservationsComponent } from './mesreservations/mesreservations.component';
import { FactureComponent } from './facture/facture.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    OffreComponent,
    DetailoffreComponent,
    MesreservationsComponent,
    FactureComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
