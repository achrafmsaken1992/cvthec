import { Component, OnInit } from '@angular/core';
import {QuizService} from "../../../services/quiz.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.scss']
})
export class ReponseComponent implements OnInit {
  rep="";
suggestions:any;
  id:number;
  question:any;
  totalPages:number;
  size:number=5;
  page=0;
  pages:Array<number>;
  numberpage:number;
  totalpage:number;
tab:string[]=[];
mot="Suivant";
resultat:any;
idQuestion:number;

  constructor(private quizService:QuizService,public r:Router
      ,private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.id= this.route.snapshot.params['id'];
this.getQuestions();









  }
change(i:number){
if(this.tab[i]=="0"){
    this.tab[i]="1"
}
else{
    this.tab[i]="0"
}

}

getQuestions(){
    this.tab=[];

    this.quizService.getQuestionsCandidat(this.page,this.id).subscribe(
      data=>{
        this.question=data.content[0].question;
        this.idQuestion=data.content[0].id;


        this.pages=new Array(data.totalPages);
        this.totalPages=data.totalElements;
        this.numberpage=this.page+1;
        this.totalpage=data.totalPages;
        this.getSuggestions();



          for(let i=0;i<this.resultat.length;i++)
          {
              this.tab[i]="0"
          }

      }
  )
}
    getSuggestions(){
        this.quizService.getSuggestions(this.idQuestion).subscribe(resp=>{
            this.suggestions=resp;
            console.log(this.suggestions.length)
            for(let i=0;i<this.suggestions.length;i++){
                this.tab[i]="0";
            }
        })

    }

  suivant(){
        if(this.page<this.totalpage) {
            let reponseEtudiant = "";
            for (let i = 0; i < this.tab.length; i++) {
                reponseEtudiant += this.tab[i];
            }

            this.quizService.getSuggestionReponse(this.idQuestion,reponseEtudiant).subscribe(
                resp=>{
                    if(resp==1){
                        alert("oui")
                    }else{
                        alert("non")
                    }
                }
                err=>{
            
                }
            )
            if (this.page < this.totalpage - 1) {
                this.page++
            }


            if (this.page == this.totalpage - 1){
                this.mot = "Terminer"}





        }

    this.getQuestions();

  }
/*
 this.data=data;
 console.log(data);
 this.pages=new Array(data.totalPages);
 this.totalPages=data.totalElements;
 this.numberpage=this.page*this.size+data.numberOfElements;
 this.totalpage=data.totalPages;
*/


  /*for(let i=0;i<4;i++){
    this.tab[i]=0;
    console.log(this.tab[i]);
  }*/




}
