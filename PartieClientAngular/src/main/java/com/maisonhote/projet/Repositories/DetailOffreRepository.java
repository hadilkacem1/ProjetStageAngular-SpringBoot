package com.maisonhote.projet.Repositories;

import com.maisonhote.projet.Entity.DetailOffre;
import com.maisonhote.projet.Entity.Offre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DetailOffreRepository extends JpaRepository<DetailOffre, Long> {
}
