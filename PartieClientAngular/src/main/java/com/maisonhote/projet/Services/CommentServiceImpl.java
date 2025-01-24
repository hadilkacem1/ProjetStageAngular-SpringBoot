package com.maisonhote.projet.Services;

import com.maisonhote.projet.Entity.Comment;
import com.maisonhote.projet.Entity.Offre;
import com.maisonhote.projet.Repositories.CommentRepository;
import com.maisonhote.projet.Repositories.OffreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private OffreRepository offreRepository;

    @Override
    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    @Override
    public List<Comment> getCommentsForOffre(Long offreId) {
        return commentRepository.findByOffre_Id(offreId);
    }
    @Override
    public Comment addCommentToOffre(Long offreId, Comment comment) {
        Offre offre = offreRepository.findById(offreId).orElse(null);

        if (offre != null) {
            comment.setOffre(offre); // Set the associated Offre for the Comment
            return commentRepository.save(comment);
        } else {
            // Handle case when Offre doesn't exist (optional)
            return null;
        }
    }

    @Override
    public void deleteComment(Long commentId) {
        commentRepository.deleteById(commentId);
    }


    @Override
    public Comment modifyComment(Long commentId, Comment updatedComment) {
        Optional<Comment> existingCommentOptional = commentRepository.findById(commentId);

        if (existingCommentOptional.isPresent()) {
            Comment existingComment = existingCommentOptional.get();
            existingComment.setNom(updatedComment.getNom());
            existingComment.setEmail(updatedComment.getEmail());
            existingComment.setSujet(updatedComment.getSujet());
            existingComment.setMessage(updatedComment.getMessage());

            return commentRepository.save(existingComment);
        } else {
            // Handle case when Comment doesn't exist (optional)
            return null;
        }
    }
}


