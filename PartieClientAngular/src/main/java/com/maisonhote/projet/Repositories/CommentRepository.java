package com.maisonhote.projet.Repositories;

import com.maisonhote.projet.Entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository  extends JpaRepository<Comment, Long> {
    List<Comment> findByOffre_Id(Long offreId);
}
