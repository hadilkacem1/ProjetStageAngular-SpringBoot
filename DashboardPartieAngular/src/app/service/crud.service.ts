import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Model/Admin.model';
import { Client } from '../Model/Client.model';
import { Observable } from 'rxjs';
import { Contact } from '../Model/Contact.model';
import { Offre } from '../Model/Offre.model';
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  helper=new JwtHelperService();
  apiUrl = "http://localhost:8081/api";
  loginUserUrl="http://localhost:8081/api/admin/login"

  constructor(private http: HttpClient) { }

  addadmin(admin: Admin) {
    // Sends an HTTP POST request to the URL: this.apiUrl+"/admin"
    return this.http.post<any>(`${this.apiUrl}/admin`, admin, httpOptions);
  }

  addclient(client: Client) {
    // Sends an HTTP POST request to the URL: this.apiUrl+"/client"
    return this.http.post<any>(`${this.apiUrl}/client`, client, httpOptions);
  }
  addoffre(offre: Offre) {
    // Sends an HTTP POST request to the URL: this.apiUrl+"/client"
    return this.http.post<any>(`${this.apiUrl}/offre`, offre, httpOptions);
  }


  onDeleteAdmin(id : number){
    const url =`${this.apiUrl+"/admin"}/${id}` 
    return this.http.delete(url , httpOptions)
  }

  getAdmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiUrl + "/admin");
  }

  onDeleteContact(id : number){
    const url =`${this.apiUrl+"/contact"}/${id}` 
    return this.http.delete(url , httpOptions)
  }

  getContact(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.apiUrl + "/contact");
  }

  onDeleteOffre(id : number){
    const url =`${this.apiUrl+"/offre"}/${id}` 
    return this.http.delete(url , httpOptions)
  }

  getOffre(): Observable<Offre[]>{
    return this.http.get<Offre[]>(this.apiUrl + "/offre");
  }

  //
  onDeleteClient(id : number){
    const url =`${this.apiUrl+"/client"}/${id}` 
    return this.http.delete(url , httpOptions)
  }

  getClient(): Observable<Client[]>{
    return this.http.get<Client[]>(this.apiUrl + "/client");
  }

  loginAdmin(admin:Admin){
    return this.http.post<any>(this.loginUserUrl, admin);
  }
  isLoggedIn(){

    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }
  
  }

  updateOffre(id:number,offre: Offre) {
    const url = `${this.apiUrl+"/offre"}/${id}`
    return this.http.put<any>(url, offre);
  }
 
findProduitById(id : number): Observable<Offre> {
    const url =` ${this.apiUrl + "/offre"}/${id}`;
    return this.http.get<Offre>(url,httpOptions)
  

}

userDetails(){
  let token:any=localStorage.getItem('myToken');
  let decodeToken= this.helper.decodeToken(token);
   return decodeToken.data;
 }
 updateAdmin(id: number, admin: Admin): Observable<any> {
  const url = `${this.apiUrl}/admin/${id}`;
  return this.http.put<any>(url, admin, httpOptions);
}

findAdminById(id: number): Observable<Admin> {
  const url = `${this.apiUrl}/admin/${id}`;
  return this.http.get<Admin>(url, httpOptions);
}

updateClient(id: number, client: Client): Observable<any> {
  const url = `${this.apiUrl}/client/${id}`;
  return this.http.put<any>(url, client, httpOptions);
}

findClientById(id: number): Observable<Client> {
  const url = `${this.apiUrl}/client/${id}`;
  return this.http.get<Client>(url, httpOptions);
}

}
