import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../model/Contact.model';
import { Observable, Subject } from 'rxjs';
import { Offre } from '../model/Offre.model';
import { Client } from '../model/Client.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { DetailOffre } from '../model/DetailOffre.model';
import { Reservation } from '../model/Reservation.model';
import { Comment } from '../model/Comment.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  helper=new JwtHelperService();
  apiUrl = "http://localhost:8085/api";
  baseUrl="http://localhost:8085/api/offre";
  loginUserUrl="http://localhost:8085/api/client/login"
  private apiU= 'http://localhost:8085/api/comments';

  private __clientConnect= new Subject<void>();
  isConnected=false;

  constructor(private http: HttpClient,private router :Router) { }

  addcontact(contact: Contact) {
    return this.http.post<any>(`${this.apiUrl}/contact`, contact, httpOptions);
  }

  onDeleteOffre(id : number){
    const url =`${this.apiUrl+"/offre"}/${id}` 
    return this.http.delete(url , httpOptions)
  }

  getOffre(): Observable<Offre[]>{
    return this.http.get<Offre[]>(this.apiUrl + "/offre");
  }
  addclient(client: Client) {
    // Sends an HTTP POST request to the URL: this.apiUrl+"/client"
    return this.http.post<any>(`${this.apiUrl}/client`, client, httpOptions);
  }

  loginClient(client:Client){
    this.loginClientFromApi(client).subscribe((data)=>{
      console.log(data)
      var decoded:any = jwt_decode(data.token);
 
      console.log(decoded);
      this.loginInClient(decoded.data)
      this.__clientConnect.next()
    })
  }
  get ClientConnect()
  {
    return this.__clientConnect
  }

  loginInClient(data:any){
    localStorage.setItem("idC",data.id)
    this.isConnected=true
    this.router.navigate(['/Offre']).then(()=>{
      window.location.reload()
    })
  }

  loginClientFromApi(client:Client){
    return this.http.post<any>(this.loginUserUrl, client);
  }
  isLoggedIn(){

    let token = localStorage.getItem("idC");

    if (token) {
      return true ;
    } else {
      return false;
    }
  
  }

  getDetailOffreById(id: number): Observable<DetailOffre> {
    return this.http.get<DetailOffre>(`${this.baseUrl}/${id}/details`);
  }
  reserverFromApi(rq:any){
    return this.http.post<any>( "http://localhost:8085/api/reservation" ,rq ,httpOptions);
  }

  getReservationsByClientId(clientId: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservation/Get-All-ByIdClient/${clientId}`);
  }

  confirmerReservation(idReservation: number): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiUrl}/reservation/confirmer/${idReservation}`, null);
  }
getOffreDetails(idOffre: number): Observable<Offre> {
    return this.http.get<Offre>(`${this.apiUrl}/offre/details/${idOffre}`);
  }

  getReservationDetails(idReservation: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/reservation/details/${idReservation}`);
  }
  
  annulerReservation(id: number) {
    return this.http.post(`${this.apiUrl}/reservation/annuler/${id}`, {});
  }

    
  addCommentToOffre(offreId: number, comment: Comment): Observable<Comment> {
    const url = `${this.apiU}/offres/${offreId}`; // Adjust the API URL as needed
    return this.http.post<Comment>(url, comment, httpOptions);
  }

  getListOfCommentsForOffre(offreId: number): Observable<Comment[]> {
    const url = `${this.apiUrl}/comments/offres/${offreId}`;
    return this.http.get<Comment[]>(url);
  }

  deleteComment(commentId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/comments/delete/${commentId}`);
  }
  
  modifyComment(commentId: number, updatedComment: Comment): Observable<Comment> {
    return this.http.put<Comment>(`${this.apiUrl}/comments/modify/${commentId}`, updatedComment);
  }

  
  createReservation(reservation: Reservation): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservation/create-reservation`, reservation);
  }

  
  showOfferId(offreId: number) {
    console.log('Offer ID:', offreId);
  }
  

  ajouterDetailOffre(detailOffre: DetailOffre, idOffre: number): Observable<DetailOffre> {
    const url = `${this.apiUrl}/Detailoffre/ajouter/${idOffre}`; // Ajoutez "/Detailoffre/ajouter/" avant l'ID
    return this.http.post<DetailOffre>(url, detailOffre);
  
  
}}