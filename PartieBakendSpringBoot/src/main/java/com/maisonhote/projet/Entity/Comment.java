package com.maisonhote.projet.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Comment  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String email;
    private String sujet;
    private String message;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "offre_id")
    private Offre offre; // Many-to-one relationship with Offre

}