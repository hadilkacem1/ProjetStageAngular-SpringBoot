package com.maisonhote.projet.Controllers;

import com.maisonhote.projet.Entity.Admin;
import com.maisonhote.projet.Entity.Client;
import com.maisonhote.projet.Entity.Contact;
import com.maisonhote.projet.Repositories.AdminRepository;
import com.maisonhote.projet.Repositories.ContactRepository;
import com.maisonhote.projet.Services.AdminService;
import com.maisonhote.projet.Services.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping(value ="/contact")
public class ContactController {
    @Autowired
    ContactService contactService;
    private ContactRepository contactRepository;

    @Autowired

    public ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;



    }
    @RequestMapping(method = RequestMethod.POST )

    public Contact ajoutContact(@RequestBody Contact contact){


        return contactService.ajouterContact(contact);

    }


    @RequestMapping(value = "/{id}" ,method = RequestMethod.PUT)
    public Contact modifierContact(@PathVariable("id")Long id, @RequestBody Contact contact){



        Contact newContact = contactService.modifierContact(contact);
        return newContact;
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )
//RequestBody:tekhdh vrb tabaathhom lel contrl kn sar c bon snn erreur
    public void suppClient(@PathVariable("id") long id){
        contactService.supprimerContact(id);

    }
    @RequestMapping(method = RequestMethod.GET )
//RequestBody:tekhdh vrb tabaathhom lel contrl kn sar c bon snn erreur
    public List<Contact> afficherContact(){
        return contactService.afficherContact();

    }
    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<Contact> getContactById(@PathVariable("id") long id){

        Optional<Contact> contact = contactService.afficherContactById(id);
        return contact;
    }
    @GetMapping("/compterTotalContacts")
    public long compterTotalContacts() {
        return contactService.compterTotalContacts();
    }

}
