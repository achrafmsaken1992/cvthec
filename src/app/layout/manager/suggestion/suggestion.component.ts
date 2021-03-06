import { Component, OnInit } from '@angular/core';
import {ManagersService} from "../../../services/managers.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import swal from 'sweetalert2';
import {QuizService} from "../../../services/quiz.service";
import {AuthService} from '../../../services/auth.service';
declare var jQuery:any;
@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {
  id:number;
  suggestions:any;

  constructor(private r:Router
      ,private route: ActivatedRoute,public quizService:QuizService,public _location: Location,private managerService:ManagersService
  ,private authService:AuthService) {
    if(this.authService.isManeger()==false)
    {
      this.r.navigate(['access-denied'])
    }
    this.id= this.route.snapshot.params['id'];


    if(isNaN(this.id)==true){
      this.r.navigate(['not-found'])
    }

  }
  ngOnInit() {
   // this.isQuestionManager();
    this.getSuggestion();
  }
  isQuestionManager(){
    this.managerService.isQuestionManager(this.id).subscribe(resp=>{
      if(resp==0){
       // this.r.navigate(['access-denied'])
      }
    })
  }




  backClicked(){
    this._location.back();
  }
  getSuggestion(){
    this.quizService.getSuggestions(this.id).subscribe(resp=>{

this.suggestions=resp;
    },err=>{

    })
  }
  register(form) {



    if (!form.valid) {

      swal('Oops...','vous devez remplir convenablement les champs'+ '!', 'error');



    }

    else {


      form.value.question=this.id;

      swal({
        title: 'Etes vous sur?',
        text: '',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, je confirme!',
        cancelButtonText: `Non, j'annule`
      }).then((result) => {
        if (result.value) {

          this.quizService.addSuggestion(form.value).subscribe(resp=>{
            swal(
                'Ajouté!',
                'ajout suggestion avec succés',
                'success'
            )
            form.reset();
            this.getSuggestion();
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

        this.quizService.deleteSuggestion(id).subscribe(resp=>{
          swal(
              'Supprimé!',
              'supprimer suggestion avec succés',
              'success'
          )

          this.getSuggestion();
        })




        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal(
            'Annuler',
            'suppression suggestion annulé :)',
            'error'
        )

      }})








  }
  modal(id) {

    jQuery("#suggestion" + id).modal()


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

          this.quizService.updateSuggestion(form.value).subscribe(resp=>{
            swal(
                'Modification!',
                'modification suggestion avec succés',
                'success'
            )
            jQuery("div").removeClass("modal-backdrop");
            jQuery("body").removeClass("modal-open ");
            form.reset();
            this.getSuggestion();
          })




          // For more information about handling dismissals please visit
          // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal(
              'Annuler',
              'Modification suggestion annulé :)',
              'error'
          )

        }})








    }
  }
}
