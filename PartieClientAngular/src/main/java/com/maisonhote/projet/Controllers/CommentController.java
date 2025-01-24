package com.maisonhote.projet.Controllers;

import com.maisonhote.projet.Entity.Comment;
import com.maisonhote.projet.Repositories.CommentRepository;
import com.maisonhote.projet.Repositories.OffreRepository;
import com.maisonhote.projet.Services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


    @RestController
    @CrossOrigin("*")
    @RequestMapping(value ="/comments")
    public class CommentController {

        @Autowired
        private OffreRepository offreRepository;

        @Autowired
        private CommentRepository commentRepository;

        @Autowired
        private CommentService commentService;


        @GetMapping("/all")
        public List<Comment> getAllComments() {
            return commentService.getAllComments();
        }

        @PostMapping("/offres/{offreId}") // Define the path variable
        public ResponseEntity<Comment> addCommentToOffre(@PathVariable Long offreId, @RequestBody Comment comment) {
            return offreRepository.findById(offreId).map(offre -> {
                comment.setOffre(offre); // Set the associated Offre for the Comment
                Comment newComment = commentRepository.save(comment);
                return ResponseEntity.ok(newComment);
            }).orElse(ResponseEntity.notFound().build());
        }

        @GetMapping("/offres/{offreId}")
        public ResponseEntity<List<Comment>> getCommentsForOffre(@PathVariable Long offreId) {
            List<Comment> comments = commentService.getCommentsForOffre(offreId);
            return ResponseEntity.ok(comments);
        }

        @DeleteMapping("/delete/{commentId}")
        public ResponseEntity<String> deleteComment(@PathVariable Long commentId) {
            commentService.deleteComment(commentId);
            return ResponseEntity.ok("Comment deleted successfully.");
        }

        @PutMapping("/modify/{commentId}")
        public ResponseEntity<Comment> modifyComment(@PathVariable Long commentId, @RequestBody Comment updatedComment) {
            Comment modifiedComment = commentService.modifyComment(commentId, updatedComment);
            if (modifiedComment != null) {
                return ResponseEntity.ok(modifiedComment);
            } else {
                return ResponseEntity.notFound().build();
            }
        }

    }
