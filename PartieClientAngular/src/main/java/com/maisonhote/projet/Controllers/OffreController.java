package com.maisonhote.projet.Controllers;

import com.maisonhote.projet.Entity.Admin;
import com.maisonhote.projet.Entity.Contact;
import com.maisonhote.projet.Entity.DetailOffre;
import com.maisonhote.projet.Entity.Offre;
import com.maisonhote.projet.Repositories.ContactRepository;
import com.maisonhote.projet.Repositories.OffreRepository;
import com.maisonhote.projet.Services.ContactService;
import com.maisonhote.projet.Services.OffreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping(value ="/offre")
public class OffreController {
    @Autowired
    OffreService offreService;
    private OffreRepository offreRepository;

    @Autowired

    public OffreController(OffreRepository offreRepository) {
        this.offreRepository = offreRepository;


    }
    @RequestMapping(method = RequestMethod.POST )

    public Offre ajoutOffre(@RequestBody Offre offre){
        Offre savedUser = offreRepository.save(offre);
        return offreService.ajouterOffre(offre);

    }


    @RequestMapping(value = "/{id}" ,method = RequestMethod.PUT)
    public Offre modifierOffre(@PathVariable("id")Long id, @RequestBody Offre offre){


        Offre newOffre = offreService.modifierOffre(offre);
        return newOffre;
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )
//RequestBody:tekhdh vrb tabaathhom lel contrl kn sar c bon snn erreur
    public void suppOffre(@PathVariable("id") long id){
        offreService.supprimerOffre(id);

    }
    @RequestMapping(method = RequestMethod.GET )
//RequestBody:tekhdh vrb tabaathhom lel contrl kn sar c bon snn erreur
    public List<Offre> afficherOffre(){
        return offreService.afficherOffre();

    }
    @RequestMapping(value = "/{id}" , method = RequestMethod.GET)
    public Optional<Offre> getContactById(@PathVariable("id") long id){

        Optional<Offre> offre = offreService.afficherOffreById(id);
        return offre;
    }
      @GetMapping("/{id}/details")
    public ResponseEntity<DetailOffre> getDetailOffreByOffreId(@PathVariable Long id) {
        DetailOffre detailOffre = offreService.getDetailOffreByOffreId(id);
        if (detailOffre != null) {
            return ResponseEntity.ok(detailOffre);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/details/{idOffre}") // Change the URL mapping to be more specific
    public ResponseEntity<Offre> getOffreDetails(@PathVariable Long idOffre) {
        Offre offre = offreService.getOffreDetails(idOffre);
        return ResponseEntity.ok(offre);
    }

    @GetMapping("/{id}/hasDetails")
    public ResponseEntity<Boolean> checkIfOffreHasDetails(@PathVariable Long id) {
        boolean hasDetails = offreService.checkIfOffreHasDetails(id);
        return ResponseEntity.ok(hasDetails);
    }



}
