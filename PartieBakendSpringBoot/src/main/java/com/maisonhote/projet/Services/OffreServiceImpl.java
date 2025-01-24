package com.maisonhote.projet.Services;

import com.maisonhote.projet.Entity.DetailOffre;
import com.maisonhote.projet.Entity.Offre;
import com.maisonhote.projet.Repositories.OffreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OffreServiceImpl implements OffreService{

    @Autowired
    OffreRepository offreRepository;
    @Override
    public Offre ajouterOffre(Offre offre) {
        return  offreRepository.save(offre);
    }

    @Override
    public Offre modifierOffre(Offre offre) {
        return  offreRepository.save(offre);
    }

    @Override
    public void supprimerOffre(Long id) {
        offreRepository.deleteById(id);
    }

    @Override
    public List<Offre> afficherOffre() {
        return  offreRepository.findAll();
    }

    @Override
    public Optional<Offre> afficherOffreById(Long id) {
        return offreRepository.findById(id);
    }


    public DetailOffre getDetailOffreByOffreId(Long id) {
        Offre offre = offreRepository.findById(id).orElse(null);
        if (offre != null) {
            return offre.getDetailOffre();
        } else {
            return null;
        }
    }
    public Offre getOffreDetails(Long idOffre) {
        // Implement logic to retrieve offer details from the repository
        Optional<Offre> offreOptional = offreRepository.findById(idOffre);
        return offreOptional.orElse(null);
    }

    public boolean checkIfOffreHasDetails(Long offreId) {
        Optional<Offre> offreOptional = offreRepository.findById(offreId);
        return offreOptional.map(offre -> offre.getDetailOffre() != null).orElse(false);
    }

}
