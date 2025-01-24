import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailOffre } from '../model/DetailOffre.model';
import { Offre } from '../model/Offre.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../model/Comment.model';
@Component({
  selector: 'app-detailoffre',
  templateUrl: './detailoffre.component.html',
  styleUrls: ['./detailoffre.component.css']
})
export class DetailoffreComponent implements OnInit {
  detailOffre: DetailOffre;
  listOffre: Offre[];
  isLoggedIn: boolean;
 // comments: Comment[] = []; // Vos commentaires
  updatedComment: Comment = {}; // Commentaire en cours de modificatio
  p: number = 1;
  collection: any[];
  commentForm: FormGroup;
  offreId: number;
  showCommentForm: boolean = false;
  comments: Comment[];
  reservationForm: FormGroup;

  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private service: CrudService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
    this.commentForm = this.formBuilder.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sujet: ['', Validators.required],
      message: ['', Validators.required]
    });

    this.reservationForm = this.formBuilder.group({
      arrivalDate: ['', Validators.required],
      departureDate: ['', Validators.required],
      numberOfAdults: ['', Validators.required],
      numberOfChildren: ['', Validators.required],
      offreId: [''] // Notez que vous pouvez le laisser vide ici, car nous le remplirons dynamiquement
    });
  }

  get nom() { return this.commentForm.get('nom'); }
  get email() { return this.commentForm.get('email'); }
  get sujet() { return this.commentForm.get('sujet'); }
  get message() { return this.commentForm.get('message'); }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.offreId = +params.get('id');
      this.service.getDetailOffreById(this.offreId).subscribe(
        (detailOffre) => {
          this.detailOffre = detailOffre;
          this.service.getOffre().subscribe(offre => {
            this.listOffre = offre;
            this.isLoggedIn = this.service.isLoggedIn();
            this.showOfferId(this.offreId);
            this.fetchListOfComments();
          });
        },
        (error) => {
          console.error('An error occurred:', error);
        }
      );
    });
  }

  showOfferId(offreId: number) {
    return offreId;
  }

  toggleCommentForm() {
    this.showCommentForm = !this.showCommentForm;
    this.route.navigate(['/offre', this.offreId, 'comment']);
  }

  fetchListOfComments() {
    this.service.getListOfCommentsForOffre(this.offreId).subscribe(
      (comments) => {
        // Sort the comments by index in reverse order
        this.comments = comments.sort((a, b) => comments.indexOf(b) - comments.indexOf(a));
  
        // Take the first three comments
        this.comments = this.comments.slice(0, 3);
      },
      (error) => {
        console.error('Error fetching comments:', error);
      }
    );
  }
  
  ajouterCommentWithOffreId() {
    if (this.commentForm.valid) {
      const newComment: Comment = this.commentForm.value;

      this.service.addCommentToOffre(this.offreId, newComment).subscribe(
        res => {
          console.log(res);
          this.fetchListOfComments();
          this.successMessage = 'Comment added successfully!';
          this.errorMessage = null;
          this.commentForm.reset();
          
        },
        err => {
          console.log(err);
          this.errorMessage = 'Error adding comment.';
          this.successMessage = null;
        }
      );
    } else {
      // Handle form validation error here
    }
  }
  
  onSubmitReservation() {
    if (this.reservationForm.valid) {
        const newReservation = this.reservationForm.value;

        this.service.createReservation(newReservation).subscribe(
            response => {
                console.log(response); // Affichez la réponse dans la console

                // Si la réponse contient un message de confirmation, affichez-le à l'utilisateur
                if (response.message) {
                    this.successMessage = response.message;
                    this.errorMessage = null;
                } else {
                    // Si la réponse ne contient pas de message, affichez un message générique
                    this.successMessage = 'Réservation créée avec succès!';
                    this.errorMessage = null;
                }

                // Réinitialisez le formulaire de réservation après la création réussie
                this.reservationForm.reset();
            },
            error => {
                console.error(error);
                this.successMessage = null;
                this.errorMessage = 'Une erreur s\'est produite lors de la création de la réservation.';
            }
        );
    }
}
showEditForm(comment: Comment) {
  // Copie le commentaire dans updatedComment pour la modification
  this.updatedComment = { ...comment };
}

modifyComment(comment: Comment) {
  this.service.modifyComment(comment.id, this.updatedComment)
    .subscribe(
      updatedComment => {
        // Mettez à jour le commentaire modifié dans votre liste de commentaires
        // ou effectuez toute autre action nécessaire
      },
      error => {
        // Gérez l'erreur en conséquence
      }
    );
}

// Inside your Angular component class
deleteComment(commentId: number) {
  if (confirm('Are you sure you want to delete this comment?')) {
    this.service.deleteComment(commentId).subscribe(
      response => {
        console.log(response); // Success message or handle as needed
        this.fetchListOfComments(); // Refresh the list of comments
      },
      error => {
        console.error(error); // Handle error if needed
      }
    );
  }
}


}
