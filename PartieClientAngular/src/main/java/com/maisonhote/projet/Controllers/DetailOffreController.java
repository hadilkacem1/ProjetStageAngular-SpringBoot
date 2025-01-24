package com.maisonhote.projet.Controllers;

import com.maisonhote.projet.Entity.Client;
import com.maisonhote.projet.Entity.Contact;
import com.maisonhote.projet.Entity.DetailOffre;
import com.maisonhote.projet.Services.DetailOffreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/DetailOffre")
public class DetailOffreController {

    @Autowired
     DetailOffreService detailOffreService;

    @PostMapping("/ajouter/{idOffre}")
    public ResponseEntity<DetailOffre> ajouterDetailOffre(@RequestBody DetailOffre detailOffre, @PathVariable Long idOffre) {
        DetailOffre nouveauDetailOffre = detailOffreService.ajouterDetailOffre(detailOffre, idOffre);

        if (nouveauDetailOffre != null) {
            return ResponseEntity.ok(nouveauDetailOffre);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/liste")
    public List<DetailOffre> findAllDetailOffres() {
        return detailOffreService.findAllDetailOffres();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DetailOffre> findDetailOffreById(@PathVariable Long id) {
        DetailOffre detailOffre = detailOffreService.findDetailOffreById(id);
        if (detailOffre != null) {
            return ResponseEntity.ok(detailOffre);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

        @DeleteMapping("/supprimer/{id}")
    public ResponseEntity<String> deleteDetailOffre(@PathVariable Long id) {
        detailOffreService.supprimerDetail(id);
        return ResponseEntity.ok("Le détail d'offre a été supprimé avec succès.");
    }
    @RequestMapping(value = "/{id}" ,method = RequestMethod.PUT)
    public DetailOffre modifierDetail(@PathVariable("id")Long id, @RequestBody DetailOffre detailOffre){




        DetailOffre newDetailOffre = detailOffreService.modifierDetail(detailOffre);
        return newDetailOffre;
    }
}
