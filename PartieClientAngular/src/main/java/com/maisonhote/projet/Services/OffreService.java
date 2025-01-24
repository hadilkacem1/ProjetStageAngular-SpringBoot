package com.maisonhote.projet.Services;

import com.maisonhote.projet.Entity.Client;
import com.maisonhote.projet.Entity.DetailOffre;
import com.maisonhote.projet.Entity.Offre;

import java.util.List;
import java.util.Optional;

public interface OffreService {
    Offre ajouterOffre(Offre offre);
    Offre modifierOffre(Offre offre);

    void supprimerOffre(Long id);
    List<Offre> afficherOffre();
    Optional<Offre> afficherOffreById(Long id);
    public DetailOffre getDetailOffreByOffreId(Long id);
    public Offre getOffreDetails(Long idOffre);
    public boolean checkIfOffreHasDetails(Long offreId);
 
}
