package com.maisonhote.projet.Services;

import com.maisonhote.projet.Entity.Contact;
import com.maisonhote.projet.Entity.DetailOffre;
import com.maisonhote.projet.Entity.Offre;
import com.maisonhote.projet.Repositories.DetailOffreRepository;
import com.maisonhote.projet.Repositories.OffreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DetailOffreServiceImpl implements DetailOffreService{
    @Autowired
    DetailOffreRepository detailOffreRepository;

    @Autowired
    OffreRepository offreRepository;


    public DetailOffre ajouterDetailOffre(DetailOffre detailOffre, Long idOffre) {
        // Récupérer l'offre correspondante depuis le référentiel
        Offre offre = offreRepository.findById(idOffre).orElse(null);

        if (offre != null) {
            // Associer l'offre au détail
            detailOffre.setOffre(offre);
            // Enregistrer le détail d'offre dans le référentiel
            return detailOffreRepository.save(detailOffre);
        } else {
            // Gérer le cas où l'offre avec l'ID spécifié n'existe pas
            return null; // ou lancer une exception appropriée
        }
    }
    // Méthode pour modifier un détail d'offre

    public List<DetailOffre> findAllDetailOffres() {
        return detailOffreRepository.findAll();
    }

    // Méthode pour trouver un détail d'offre par son ID
    public DetailOffre findDetailOffreById(Long id) {
        Optional<DetailOffre> optionalDetailOffre = detailOffreRepository.findById(id);
        return optionalDetailOffre.orElse(null);
    }

    public DetailOffre modifierDetail(DetailOffre detailOffre) {
        return  detailOffreRepository.save(detailOffre);


}
    @Override
    public void supprimerDetail(Long id) {
        detailOffreRepository.deleteById(id);
    }

}
