package com.maisonhote.projet.Services;

import com.maisonhote.projet.Entity.Admin;
import com.maisonhote.projet.Entity.Client;

import java.util.List;
import java.util.Optional;

public interface ClientService {
    Client ajouterClient(Client client);
    Client modifierClient(Client client);

    void supprimerClient(Long id);
    List<Client> afficherClient();
    Optional<Client> afficherClientById(Long id);
}
