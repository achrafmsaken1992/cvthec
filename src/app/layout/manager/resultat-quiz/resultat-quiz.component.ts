import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {Location} from '@angular/common';
@Component({
  selector: 'app-resultat-quiz',
  templateUrl: './resultat-quiz.component.html',
  styleUrls: ['./resultat-quiz.component.scss']
})
export class ResultatQuizComponent implements OnInit {
id:number;
moyenne:number;
  totalPages:number;
data:any;

  page=0;
  pages:Array<number>;
  numberpage:number;
  totalpage:number;
  quiz:any;
  reussis:number;

  constructor(public _location: Location,private r:Router
      ,private route: ActivatedRoute,public quizService:QuizService) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id'];
    this.getNotes();
    this.getQuiz();
    this.getMoyenneQcm();
    this.nbrParticipantsReussisQcm();
  }
getNotes(){
    this.quizService.findNoteByqcm(this.id,this.page).subscribe(data=>{
      this.data=data;

      this.pages=new Array(data.totalPages);
      this.totalPages=data.totalElements;
      this.numberpage=this.page*10+data.numberOfElements;
      this.totalpage=data.totalPages;
    })
}
getQuiz(){
  this.quizService.findQuizById(this.id).subscribe(resp=>{
this.quiz=resp;
  });
}
resultat(res){
  return parseInt(res);
}
getMoyenneQcm(){

  this.quizService.moyenneNoteQcm(this.id).subscribe(resp=>{
    this.moyenne=resp;
      })

}
  nbrParticipantsReussisQcm(){
  this.quizService.nbrParticipantsReussisQcm(this.id).subscribe(resp=>{
    this.reussis=resp;
  })


  }
  tauxReussis(){
   return (this.reussis/this.totalPages)*100;
  }
pourcentage(reponseCorrect:number,reponseFausse:number){
    return ((reponseCorrect/(reponseCorrect+reponseFausse)*100).toFixed(2));
}
  backClicked(){
    this._location.back();
  }

}
