import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {QuizService} from "../../../services/quiz.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import {CandidatService} from "../../../services/candidat.service";
import {ToastsManager} from "ng2-toastr";
import swal from 'sweetalert2';
import {AuthService} from '../../../services/auth.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
quizs:any;
id:number;
n:number=0;
profile:any;

  constructor(private r:Router,private candidatService:CandidatService,
              public toastr: ToastsManager, vcr: ViewContainerRef,private authService:AuthService
      ,private route: ActivatedRoute,public quizService:QuizService) {

      if(this.authService.isEtudiant()==false)
      {
          this.r.navigate(['access-denied'])
      }
      this.id= this.route.snapshot.params['id'];
    this.toastr.setRootViewContainerRef(vcr)
    this.getQuizs(); }

  ngOnInit() {

    this.id= this.route.snapshot.params['id'];
    this.candidatService.getCandidat().subscribe(resp=>{
      this.profile=resp;});


    this.getQuizs();
  }
  getQuizs(){
    this.quizService.getQuizs(this.id).subscribe(resp=>{
      this.quizs=resp;
    },err=>{

    })
  }

verif(id){

    this.quizService.findNoteByqcmByetudiant(this.profile.id,id).subscribe(resp=>{
      if(resp==null){
this.r.navigate(["test",id]);
      }
      else{

        this.toastr.info(`tu as deja passé le quiz tu as  `+resp.reponseCorrect+` sur `+ (resp.reponseFausse+ resp.reponseCorrect)+` reponses correctes`  );

      }
    },err=>{
      console.log("non non")
    })
  }
getNbrParticipantsQcm(qcm){
    let nbr;
this.quizService.nbrParticipantsQcm(qcm).subscribe(resp=>{
    nbr=resp;
})
    return nbr;
}
getmoyenneNoteQcm(qcm){
    let note;
    this.quizService.moyenneNoteQcm(qcm).subscribe(resp=>{
        note=resp;
    })

}
getmeuilleurNoteQcm(qcm){
    let note;
    this.quizService.meuilleurNoteQcm(qcm).subscribe(resp=>{
        note=resp;
    })
    return note;

}
getplusMauvaisNoteQcm(qcm){
    let note;
    this.quizService.plusMauvaisNoteQcm(qcm).subscribe(resp=>{
        note=resp;
    })
    return note;
}
resultat(quiz){
    let reponse="";
    let nbr;
    let moyenne;
    let note;
    let meilleur;
    let mauvais;
    this.quizService.findNoteByqcmByetudiant(this.profile.id,quiz.id).subscribe(resp=>{
        reponse="tu as "+resp.reponseCorrect+` sur `+ (resp.reponseFausse+ resp.reponseCorrect)+` reponses correctes<br>`
note=(resp.reponseCorrect/(resp.reponseFausse+ resp.reponseCorrect))*100;
        this.quizService.nbrParticipantsQcm(quiz.id).subscribe(nombre=>{
    nbr=nombre;
this.quizService.moyenneNoteQcm(quiz.id).subscribe(m=>{
moyenne=m;
this.quizService.meuilleurNoteQcm(quiz.id).subscribe(mei=> {
meilleur=mei;
this.quizService.plusMauvaisNoteQcm(quiz.id).subscribe(mau=>{
    mauvais=mau


    swal(`<div style='font-size:0.69em'>` + reponse + `Votre taux de reponses correctes ` + note.toFixed(0) + `%<br><br>
Numero de participants: ` + nbr + `<br>Meilleur taux de reponses correctes:` + meilleur + `%<br><br>
moyenne taux de reponses correctes: ` + moyenne + `%<br>Plus mauvais taux de reponses correctes: ` + mauvais + `%</div>`)
})
})
})
        })
    });
    }



}
