package com.maisonhote.projet.Repositories;

import com.maisonhote.projet.Entity.Client;
import com.maisonhote.projet.Entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact,Long> {
}
