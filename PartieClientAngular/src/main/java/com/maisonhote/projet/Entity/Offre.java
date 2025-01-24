package com.maisonhote.projet.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Offre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    @Lob
    private String image;
    private Long prix;
    @Temporal(TemporalType.DATE)
    private Date dateDeb;
    @Temporal(TemporalType.DATE)
    private Date dateFin;
    private Long tel;
    private String adresse;
    @OneToOne(mappedBy = "offre")
    private DetailOffre detailOffre;
}
