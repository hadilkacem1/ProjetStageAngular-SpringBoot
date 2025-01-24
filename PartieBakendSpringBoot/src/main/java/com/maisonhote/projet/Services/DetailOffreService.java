package com.maisonhote.projet.Services;

import com.maisonhote.projet.Entity.DetailOffre;

import java.util.List;

public interface DetailOffreService {
    public DetailOffre ajouterDetailOffre(DetailOffre detailOffre, Long idOffre);
    public List<DetailOffre> findAllDetailOffres();
    public DetailOffre findDetailOffreById(Long id);
    public void supprimerDetail(Long id);
    public DetailOffre modifierDetail(DetailOffre detailOffre);

}
