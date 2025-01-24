package com.maisonhote.projet.Repositories;

import com.maisonhote.projet.Entity.Admin;
import com.maisonhote.projet.Entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client,Long> {
    Client findClientByEmail(String email);
}
