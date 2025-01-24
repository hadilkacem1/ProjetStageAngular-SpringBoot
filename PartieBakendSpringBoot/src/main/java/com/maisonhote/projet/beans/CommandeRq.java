package com.maisonhote.projet.beans;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
public class CommandeRq {
    private Long idClient;
    private Long idOffre;

    public Long getIdClient() {
        return idClient;
    }

    public void setIdClient(Long idClient) {
        this.idClient = idClient;
    }

    public Long getIdOffre() {
        return idOffre;
    }

    public void setIdOffre(Long idOffre) {
        this.idOffre = idOffre;
    }

    public CommandeRq(Long idClient, Long idOffre) {
        this.idClient = idClient;
        this.idOffre = idOffre;
    }
}
