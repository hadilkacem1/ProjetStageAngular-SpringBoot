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
public class DetailOffre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long detailOffreId;


    private String description;
    private Long nombreChambres;
    private Boolean parkingDisponible;
    private Long prixParNuit;

    // Exemple 2 : Présence d'un balcon
    private Boolean balconDisponible;

    public Boolean getWifiDisponible() {
        return WifiDisponible;
    }

    public void setWifiDisponible(Boolean wifiDisponible) {
        WifiDisponible = wifiDisponible;
    }

    private Boolean WifiDisponible;
    @OneToOne
    @JoinColumn(name = "offre_id")
    @JsonIgnore
    private Offre offre;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getNombreChambres() {
        return nombreChambres;
    }

    public void setNombreChambres(Long nombreChambres) {
        this.nombreChambres = nombreChambres;
    }

    public Boolean getParkingDisponible() {
        return parkingDisponible;
    }

    public void setParkingDisponible(Boolean parkingDisponible) {
        this.parkingDisponible = parkingDisponible;
    }

    public Long getPrixParNuit() {
        return prixParNuit;
    }

    public void setPrixParNuit(Long prixParNuit) {
        this.prixParNuit = prixParNuit;
    }

    public Boolean getBalconDisponible() {
        return balconDisponible;
    }

    public void setBalconDisponible(Boolean balconDisponible) {
        this.balconDisponible = balconDisponible;
    }

    public Offre getOffre() {
        return offre;
    }

    public void setOffre(Offre offre) {
        this.offre = offre;
    }
}
