import {Component, HostListener, OnInit, ViewContainerRef} from '@angular/core';
import {QuizService} from "../../../services/quiz.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CandidatService} from "../../../services/candidat.service";
import {Location} from '@angular/common';
import {ToastsManager} from "ng2-toastr";
@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.scss']
})
export class ReponseComponent implements OnInit {
  rep="";
  nbrT=0;
  nbrF=0;
  k=0;
addNote=0;
  quit=0;
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
profile:any;
    timeString : string;
    // duration = 10*60;
    duration = 1000;
    seconds = "--";
    minutes = "--";
    clockDisplay : string;
    interval: number;

  constructor(private quizService:QuizService,public r:Router
      ,private route: ActivatedRoute,private candidatService:CandidatService,private _location: Location
      , public toastr: ToastsManager, vcr: ViewContainerRef) {

      this.toastr.setRootViewContainerRef(vcr)
  }

  ngOnInit() {
      this.id= this.route.snapshot.params['id'];
      this.candidatService.getCandidat().subscribe(resp=>{
          this.profile=resp;


this.findNoteByqcmByetudiant(this.profile.id,this.id)    })


this.getQuestions();
      this.tickTick();








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
this.k++;
    this.quizService.getQuestionsCandidat(this.page,this.id).subscribe(
      data=>{
        this.question=data.content[0].question;
        this.idQuestion=data.content[0].id;


        this.pages=new Array(data.totalPages);
        this.totalPages=data.totalElements;
        this.numberpage=this.page+1;
        this.totalpage=data.totalPages;
        this.getSuggestions();
if(this.k==1) {
    this.duration = data.content[0].qcm.duree * this.totalPages;
    setTimeout(() => {
        let note = {
            reponseC: this.nbrT,
            reponseF: this.totalPages - this.nbrT,
            etudiantId: this.profile.id,
            qcmId: this.id
        }
     if(this.addNote==1) {
         this.quizService.addNote(note).subscribe(resp => {
             this.toastr.info(`Quiz terminé tu as repondu correctement ` + note.reponseC + `sur ` + this.totalPages + ` questions`);
             this._location.back();
         }, err => {

         })
     }

    }, this.duration * 1000);
}
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

            for(let i=0;i<this.suggestions.length;i++){
                this.tab[i]="0";
            }
        })

    }

  suivant(){
       let r:number;
let send=0;
        if(this.page<this.totalpage) {
            let reponseEtudiant = "";
            for (let i = 0; i < this.tab.length; i++) {
                reponseEtudiant += this.tab[i];
            }

            this.quizService.getSuggestionReponse(this.idQuestion,reponseEtudiant).subscribe(
                resp=>{
                    if(resp==1){
                        r=1;
                    }else{
                        r=0;
                    }
                    let reponse={
                        question:this.idQuestion,
                        etudiant:this.profile.id,
                        resultat:r

                }
                    this.quizService.addReponse(reponse).subscribe(resp=>{
                        if(r===1){
                            this.nbrT++;
                        }
                        else
                            this.nbrF++;
if(this.nbrF+this.nbrT<this.totalPages) {

}
else{

    let note = {
        reponseC: this.nbrT,
        reponseF: this.totalPages-this.nbrT,
        etudiantId: this.profile.id,
        qcmId: this.id
    }
    this.quizService.addNote(note).subscribe(resp => {

        this._location.back();
        },err=>{

    })
}


                    })
                },
                err=>{

                }
            )


    if (this.page < this.totalpage - 1) {
        this.page++
    }


    if (this.page == this.totalpage - 1) {
        this.mot = "Terminer"

    }









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
    tickTick() {

            if (this.duration > 0) {
                setInterval(() => {
                    this.duration = this.duration - 1;
                    if (this.duration <= 0) {
                        clearInterval(this.interval)
                    }

                    if (this.duration % 60 < 10) {
                        this.seconds = "0" + this.duration % 60;
                    } else {
                        this.seconds = (this.duration % 60).toString();
                    }

                    if (this.duration / 60 < 10) {
                        this.minutes = "0" + parseInt("" + this.duration / 60, 10);
                    } else {
                        this.minutes = "" + parseInt((this.duration / 60).toString(), 10);
                    }

                    this.clockDisplay = this.minutes + " : " + this.seconds;
                }, 1000);
                console.log(this.duration);

        } else {console.log("non")
            alert("fin de temps")
        }
    }


    findNoteByqcmByetudiant(etudiantId,qcmId){
        this.quizService.findNoteByqcmByetudiant(etudiantId,qcmId).subscribe(resp=>{
          if(resp==null){
this.addNote=1;
          }
          else{

              this.toastr.success(`tu as deja passé le quiz tu as repondu correctement `+resp.reponseCorrect+`sur `+ (resp.reponseFausse+ resp.reponseCorrect)+` questions`  );
         this.r.navigateByUrl("offres");
          }
        },err=>{
            console.log("non non")
        })
    }
}
