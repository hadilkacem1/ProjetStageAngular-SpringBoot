package com.maisonhote.projet.Entity;

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
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private boolean confirmee;
    private boolean annulee;
    @ManyToOne
    private Client client;

    @ManyToOne
    private Offre offre;




    public Reservation(Client client, Offre offre) {
        this.client = client;
        this.offre = offre;
        this.confirmee = false;
    }
}
