package com.maisonhote.projet.Services;

import com.maisonhote.projet.Entity.Admin;

import java.util.List;
import java.util.Optional;

public interface AdminService {
    Admin ajouterAdmin(Admin admin);
    Admin modifierAdmin(Admin admin);

    void supprimerAdmin(Long id);
    List<Admin> afficherAdmin();
    Optional<Admin> afficherAdminById(Long id);
}
