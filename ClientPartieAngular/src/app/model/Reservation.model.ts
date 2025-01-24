import { Client } from "./Client.model";
import { Offre } from "./Offre.model";

export class Reservation {
  id: number;
  nom: string; // Ajoutez la propriété 'nom' si elle n'existe pas
  client: Client;
  offre: Offre;
  confirmee: boolean;
  annulee: boolean; // Ajout de l'attribut 'annulee'

  constructor(id: number, nom: string, client: Client, offre: Offre, confirmee: boolean, annulee: boolean) {
      this.id = id;
      this.nom = nom;
      this.client = client;
      this.offre = offre;
      this.confirmee = confirmee;
      this.annulee = annulee; // Initialisation de 'annulee'
  }
}
