package com.maisonhote.projet.Services;

import com.maisonhote.projet.Entity.Admin;
import com.maisonhote.projet.Entity.Contact;

import java.util.List;
import java.util.Optional;

public interface ContactService {
    Contact ajouterContact(Contact contact);
    Contact modifierContact(Contact contact);

    void supprimerContact(Long id);
    List<Contact> afficherContact();
    Optional<Contact> afficherContactById(Long id);
    long compterTotalContacts();

}
