package com.maisonhote.projet.Repositories;

import com.maisonhote.projet.Entity.Contact;
import com.maisonhote.projet.Entity.Offre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface OffreRepository extends JpaRepository<Offre, Long> {



    }

