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
    idNote:any;

 correct=0;
fausse=0;

exit:number=0;
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

profile:any;
    timeString : string;

    duration :number=1000;
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



    getQuestions(){
this.tab=[];
        this.quizService.getQuestionsCandidat(this.page,this.id).subscribe(
            data=>{
                this.question=data.content[0];



                this.pages=new Array(data.totalPages);
                this.totalPages=data.totalElements;
                this.numberpage=this.page+1;
                this.totalpage=data.totalPages;
                let note = {

                    reponseC: 0,
                    reponseF: this.totalPages ,
                    etudiantId: this.profile.id,
                    qcmId: this.id
                }
                this.quizService.getSuggestions(this.question.id).subscribe(resp=>{
                    this.suggestions=resp;

                    for(let i=0;i<this.suggestions.length;i++){
                        this.tab[i]="0";
                    }
                    setTimeout(() => {

                        if(this.exit==0)
                            this._location.back();


                    }, this.duration * 1000);
                })
                this.quizService.addNote(note).subscribe(resp=>{
                    this.idNote=resp;

                },err=>{

                })

                this.duration = data.content[0].qcm.duree * this.totalPages;
         }
        )
    }


change(i:number){
if(this.tab[i]=="0"){
    this.tab[i]="1"

}
else{
    this.tab[i]="0"
}


}

  suivant(){

       let r:number;
let send=0;
        if(this.page<this.totalpage) {
            let reponseEtudiant = "";
            for (let i = 0; i < this.tab.length; i++) {
                reponseEtudiant += this.tab[i];
            }


            this.quizService.getSuggestionReponse(this.question.id,reponseEtudiant).subscribe(
                resp=>{
                    if(resp==1){
                        this.correct++;
                      r=1;

                    }
                       else {
                        r = 0;
                      this.fausse++;

                    }

                    let reponse={
                        id:this.idNote,
                        question:this.question.id,
                        etudiant:this.profile.id,
                        resultat:r

                }
                    this.quizService.addReponse(reponse).subscribe(resp=> {

                    })

                    let note = {
                        id:this.idNote,
                        reponseC: this.correct,
                        reponseF: this.totalPages-this.correct,
                        etudiantId: this.profile.id,
                        qcmId: this.id
                    }
                    this.quizService.addNote(note).subscribe(resp => {

                    },err=>{

                    })
if(this.fausse+this.correct<this.totalPages) {

    if (this.fausse + this.correct === this.totalPages - 1) {
        this.mot = "terminer";
    }
    this.page++;
    this.quizService.getQuestionsCandidat(this.page,this.id).subscribe(
        data=>{
            this.question=data.content[0];



            this.pages=new Array(data.totalPages);
            this.totalPages=data.totalElements;
            this.numberpage=this.page+1;
            this.totalpage=data.totalPages;
            this.quizService.getSuggestions(this.question.id).subscribe(resp=>{
                this.suggestions=resp;

                for(let i=0;i<this.suggestions.length;i++){
                    this.tab[i]="0";
                }
            })


        })

}
    else if (this.fausse + this.correct === this.totalPages) {
        this._location.back();
    }



                },
                err=>{

                }
            )

        }

      this.tab=[];

  }

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

          }
          else{

              this.toastr.success(`tu as deja passé le quiz tu as repondu correctement `+resp.reponseCorrect+`sur `+ (resp.reponseFausse+ resp.reponseCorrect)+` questions`  );
         this.r.navigateByUrl("offres");
          }
        },err=>{
            console.log("non non")
        })
    }
    ngOnDestroy(){
        this.exit=1;
    }
}

