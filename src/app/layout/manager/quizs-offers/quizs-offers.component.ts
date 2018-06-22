import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


import swal from 'sweetalert2';

import {QuizService} from "../../../services/quiz.service";
import {Location} from '@angular/common';
import {ManagersService} from "../../../services/managers.service";
import {AuthService} from "../../../services/auth.service";
declare var jQuery:any;
@Component({
  selector: 'app-quizs-offers',
  templateUrl: './quizs-offers.component.html',
  styleUrls: ['./quizs-offers.component.scss']
})
export class QuizsOffersComponent implements OnInit {
  id: number;
  quizs: any;
  res:number[]=[];
i=0;
  constructor(public _location: Location, private r: Router
      , private route: ActivatedRoute, public quizService: QuizService,private managerService:ManagersService,
 private auth:AuthService) {
    if(this.auth.isManeger()==false)
    {
      this.r.navigate(['access-denied'])
    }
    this.id = this.route.snapshot.params['id'];
    if(isNaN(this.id)==true){
      this.r.navigate(['not-found'])
    }
    this.isOffreManager();
  }

  ngOnInit() {



    this.getQuizs();

  }

  isOffreManager(){
    this.managerService.isOffreManager(this.id).subscribe(resp=>{
      if(resp==0){
        this.r.navigate(['access-denied'])
      }
    })
  }


  getQuizs() {
    this.quizService.getQuizsManager(this.id).subscribe(resp => {
      this.quizs = resp;

    }, err => {

    })
  }

  register(form) {

    if ((form.value.duree < 20)) {
      swal(
          'Echoué!',
          'durrée minimum 20 seconde',
          'error'
      )
    }
    else if ((form.value.duree > 80)) {
      swal(
          'Echoué!',
          'durrée maximum 80 seconde',
          'error'
      )
    }

    else if (!form.valid) {

      swal('Oops...', 'vous devez remplir convenablement les champs' + '!', 'error');


    }

    else {


      form.value.offre = this.id;

      swal({
        title: 'Etes vous sur?',
        text: '',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, je confirme!',
        cancelButtonText: `Non, j'annule`
      }).then((result) => {
        if (result.value) {

          this.quizService.addQuiz(form.value).subscribe(resp => {
            swal(
                'Ajouté!',
                'ajout quiz avec succés',
                'success'
            )

            form.reset();
            this.getQuizs();
          })


          // For more information about handling dismissals please visit
          // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal(
              'Annuler',
              'ajout quiz annulé :)',
              'error'
          )

        }
      })


    }
  }

  supprimer(id) {
    swal({
      title: 'Etes vous sur?',
      text: '',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, je confirme!',
      cancelButtonText: `Non, j'annule`
    }).then((result) => {
      if (result.value) {

        this.quizService.deleteQuiz(id).subscribe(resp => {

          swal(
              'Supprimé!',
              'supprimer quiz avec succés',
              'success'
          )

          this.getQuizs();

        })


        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal(
            'Annuler',
            'suppression quiz annulé :)',
            'error'
        )

      }
    })


  }

  backClicked() {
    this._location.back();
  }

  modal(id) {

    jQuery("#quiz" + id).modal()


  }

  close() {
    jQuery(".dropdown-toggle").hide();
  }

  open() {
    jQuery(".dropdown-toggle").show();
  }

  update(form, id) {
    if (form.valid) {
      form.value.id = id;
      if ((form.value.duree < 20)) {
        swal(
            'Echoué!',
            'durrée minimum 20 seconde',
            'error'
        )
      }
      else if ((form.value.duree > 80)) {
        swal(
            'Echoué!',
            'durrée maximum 80 seconde',
            'error'
        )
      }

      else if (!form.valid) {

        swal('Oops...', 'vous devez remplir convenablement les champs' + '!', 'error');


      }

      else {


        form.value.offre = this.id;

        swal({
          title: 'Etes vous sur?',
          text: '',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui, je confirme!',
          cancelButtonText: `Non, j'annule`
        }).then((result) => {
          if (result.value) {

            this.quizService.updateQuiz(form.value).subscribe(resp => {
              swal(
                  'modification!',
                  'modification quiz avec succés',
                  'success'
              )
              jQuery("div").removeClass("modal-backdrop");
              jQuery("body").removeClass("modal-open ");
              form.reset();
              this.getQuizs();

            })
          }
        })
      }
    }
  }
 nbr(id,index){
    var k;
    if(this.i==index) {
      this.quizService.nbrQuestionsByQuiz(id).subscribe(resp => {

        k=resp;
        this.res[index] = resp

      })
      this.i++;
    }


 }
}

