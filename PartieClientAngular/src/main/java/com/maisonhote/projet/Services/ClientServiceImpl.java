package com.maisonhote.projet.Services;

import com.maisonhote.projet.Entity.Client;
import com.maisonhote.projet.Repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientServiceImpl implements ClientService{
    @Autowired
    ClientRepository clientRepository;
    @Override
    public Client ajouterClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public Client modifierClient(Client client) {
        return  clientRepository.save(client);
    }

    @Override
    public void supprimerClient(Long id) {
        clientRepository.deleteById(id);
    }

    @Override
    public List<Client> afficherClient() {
        return clientRepository.findAll();
    }

    @Override
    public Optional<Client> afficherClientById(Long id) {
        return  clientRepository.findById(id);
    }
}
