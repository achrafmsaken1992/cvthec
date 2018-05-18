import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ManagersService} from "../../../services/managers.service";
import {ActivatedRoute, Router} from "@angular/router";
import swal from 'sweetalert2';
import {QuizService} from "../../../services/quiz.service";
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
questions:any;
id:number;
  constructor(public _location: Location,private quizService:QuizService,public r:Router
,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id= parseInt(this.route.snapshot.params['id']);
console.log(this.id);
    this.getQuestions();

  }
  backClicked(){
    this._location.back();
  }
  getQuestions(){
    this.quizService.getQuestions(this.id).subscribe(resp=>{
this.questions=resp;
    },err=>{

    })
  }
  register(form) {



if (!form.valid) {

      swal('Oops...','vous devez remplir convenablement les champs'+ '!', 'error');



    }

    else {


      form.value.qcm=this.id;

      swal({
        title: 'Etes vous sur?',
        text: '',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, je confirme!',
        cancelButtonText: `Non, j'annule`
      }).then((result) => {
        if (result.value) {

          this.quizService.addQuestion(form.value).subscribe(resp=>{
            swal(
                'Ajouté!',
                'ajout quiz avec succés',
                'success'
            )
            form.reset();
            this.getQuestions();
          })




          // For more information about handling dismissals please visit
          // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal(
              'Annuler',
              'ajout quiz annulé :)',
              'error'
          )

        }})








    }
  }
  supprimer(id){

      swal({
        title: 'Etes vous sur?',
        text: '',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, je confirme!',
        cancelButtonText: `Non, j'annule`
      }).then((result) => {
        if (result.value) {

          this.quizService.deleteQuestion(id).subscribe(resp=>{
            swal(
                'Supprimé!',
                'supprimer question avec succés',
                'success'
            )

            this.getQuestions();
          })




          // For more information about handling dismissals please visit
          // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal(
              'Annuler',
              'suppression question annulé :)',
              'error'
          )

        }})








    }


}
