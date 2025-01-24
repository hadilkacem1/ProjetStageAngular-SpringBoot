package com.maisonhote.projet.Repositories;

import com.maisonhote.projet.Entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin,Long> {
    Admin findAdminByEmail(String email);
}