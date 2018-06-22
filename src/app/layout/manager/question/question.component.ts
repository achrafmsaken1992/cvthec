import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ManagersService} from "../../../services/managers.service";
import {ActivatedRoute, Router} from "@angular/router";
import swal from 'sweetalert2';
import {QuizService} from "../../../services/quiz.service";
import {AuthService} from '../../../services/auth.service';
declare var jQuery:any;
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
questions:any;

id:number;
  res:number[]=[];
  i=0;
  constructor(public _location: Location,private quizService:QuizService,public r:Router
,private managerService:ManagersService,private route: ActivatedRoute,private authService:AuthService) {
    if(this.authService.isManeger()==false)
    {
      this.r.navigate(['access-denied'])
    }

    this.id= parseInt(this.route.snapshot.params['id']);
    if(isNaN(this.id)==true){
      this.r.navigate(['not-found'])
    }
  }

  ngOnInit() {

this.isQcmManager();
    this.getQuestions();

  }

  isQcmManager(){
    this.managerService.isOffreManager(this.id).subscribe(resp=>{
      if(resp==0){
        //this.r.navigate(['access-denied'])
      }
    })
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
                'ajout question avec succés',
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
              'ajout question annulé :)',
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
  modal(id) {

    jQuery("#question" + id).modal()


  }

  close() {
    jQuery(".dropdown-toggle").hide();
  }

  open() {
    jQuery(".dropdown-toggle").show();
  }
modifier(form,id){

  if (!form.valid) {

    swal('Oops...','vous devez remplir convenablement les champs'+ '!', 'error');



  }

  else {


    form.value.id=this.id;

    swal({
      title: 'Etes vous sur?',
      text: '',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, je confirme!',
      cancelButtonText: `Non, j'annule`
    }).then((result) => {
      if (result.value) {

        this.quizService.updateQuestion(form.value).subscribe(resp=>{
          swal(
              'Modification!',
              'Modification quiz avec succés',
              'success'
          )
          jQuery("div").removeClass("modal-backdrop");
          jQuery("body").removeClass("modal-open ");
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
  nbr(id,index){
    var k;
    if(this.i==index) {
      this.quizService.nbrSuggestionByQuestion(id).subscribe(resp => {

        k=resp;
        this.res[index] = resp

      })
      this.i++;
    }


  }

}
