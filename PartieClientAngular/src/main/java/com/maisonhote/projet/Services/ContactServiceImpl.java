package com.maisonhote.projet.Services;

import com.maisonhote.projet.Entity.Contact;
import com.maisonhote.projet.Repositories.ClientRepository;
import com.maisonhote.projet.Repositories.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactServiceImpl implements ContactService{
    @Autowired
    ContactRepository contactRepository;
    @Override
    public Contact ajouterContact(Contact contact) {
        return  contactRepository.save(contact);
    }

    @Override
    public Contact modifierContact(Contact contact) {
        return  contactRepository.save(contact);
    }

    @Override
    public void supprimerContact(Long id) {
        contactRepository.deleteById(id);
    }

    @Override
    public List<Contact> afficherContact() {
        return  contactRepository.findAll();
    }

    @Override
    public Optional<Contact> afficherContactById(Long id) {
        return contactRepository.findById(id);
    }
    @Override
    public long compterTotalContacts() {
        return contactRepository.count();
    }
}
