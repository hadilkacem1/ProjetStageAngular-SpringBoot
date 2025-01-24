package com.maisonhote.projet.Services;

import com.maisonhote.projet.Entity.Comment;

import java.util.List;

public interface CommentService {
    Comment addCommentToOffre(Long offreId, Comment comment);
    List<Comment> getCommentsForOffre(Long offreId);
    public void deleteComment(Long commentId);
    public Comment modifyComment(Long commentId, Comment updatedComment);
    public List<Comment> getAllComments();
}
