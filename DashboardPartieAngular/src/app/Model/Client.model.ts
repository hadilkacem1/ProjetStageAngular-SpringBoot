// Model/Client.model.ts
export class Client {
    constructor(
      public id?: number,
      public nom?: string,
      public prenom?: string,
      public email?: string,
      public mdp?: string,
      public tel?: number,
      public adresse?: string
    ) {}
  }
  