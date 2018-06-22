import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {AuthService} from '../../services/auth.service';
import {QuizService} from '../../services/quiz.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    // Doughnut
    public doughnutChartLabels: string[] = [
        'taux des réponses correctes',
        'taux des réponses fausses',

    ];
    offresStat:any;
    competancesStat:any;
    public doughnutChartLabels2: string[] = [
        '',
        '',

    ];
    public doughnutChartData2: number[] = [0,0];
    public doughnutChartData: number[] = [0,0];
    public doughnutChartType: string = 'doughnut';


    public pieChartLabels: string[] = [
        '',
        '',
        '',
        ' '
    ];
    public pieChartData: number[] = [0,0,0,0];
    public pieChartType: string = 'pie';
nbrMsgRecu:any;
nbrMsgEnvoye:any;
offres:any;
offresManager:any;
quizs:any;
quizsRepondus:any;
entreprises:any;
etudiants:any;
    isEtudiant:boolean;
    isManager:boolean;
    isAdmin:boolean;
    compte:any;
    id:any;
    quizsManager:any;
    quizsReponse:any;
    messageriesEtudiants;
    messageriesManagers;
    nbrRepCorrecte:any;
    nbrRepFausse:any;
    constructor(private auth:AuthService,private quizService:QuizService) {







    }

    ngOnInit() {

        this.isEtudiant= this.auth.isEtudiant();
        this.isManager= this.auth.isManeger();
        this.isAdmin= this.auth.isAdmin();
if(this.isEtudiant){
        this.msgRecu();
        this.msgEnvoye();
this.nbrOffres();
this.nbrQuizs();
this.nbrQuizsRepondus();
this.nbrEntreprises();}
if(this.isManager) {
    this.msgRecu();
    this.msgEnvoye();
    this.nbrOffresManager();
    this.nbrEtudiants();
    this.nbrQuizsManagers();
    this.nbrRepQuiz();

}
if(this.isAdmin) {

    this.nbrMessageriesEtudiants();
    this.nbrOffres();
    this.nbrQuizs();
    this.nbrEtudiants();
    this.nbrEntreprises();
    this.nbrMessageriesManagers()
    this.nbrRepCorrecteEtFausse();
    this.nbrMoyenne();
    this.offreStatistique();
    this.competanceStatistique();
}

    }



msgRecu(){
        let profile:any;
    this.auth.getProfile().subscribe(resp => {
profile=resp;

        this.auth.nbrMessagesRecu(profile.id).subscribe(resp2=>{
            this.nbrMsgRecu=resp2;
        })

    }, err => {

    });


}
    msgEnvoye(){
        let profile:any;
        this.auth.getProfile().subscribe(resp => {
            profile=resp;

            this.auth.nbrMessagesEnvoye(profile.id).subscribe(resp2=>{
                this.nbrMsgEnvoye=resp2;
            })

        }, err => {

        });


    }
    nbrOffresManager(){
        let profile:any;
        this.auth.getProfile().subscribe(resp => {
            profile=resp;

            this.auth.nbrOffresManager(profile.id).subscribe(resp2=>{
                this.offresManager=resp2;
            })

        }, err => {

        });


    }



    nbrOffres(){



            this.auth.nbrOffres().subscribe(resp=>{
                 this.offres=resp;
            }, err => {

        });


    }
    nbrQuizs(){



        this.auth.nbrQuizs().subscribe(resp=>{
            this.quizs=resp;
        }, err => {

        });


    }
    nbrQuizsRepondus(){



        let profile:any;
        this.auth.getProfile().subscribe(resp => {
            profile=resp;

            this.auth.nbrQuizsRepondus(profile.id).subscribe(resp2=>{
                this.quizsRepondus=resp2;
            })

        }, err => {

        });




    }
    nbrEntreprises(){



        this.auth.nbrEntreprises().subscribe(resp=>{
            this.entreprises=resp;
        }, err => {

        });


    }
    nbrEtudiants(){



        this.auth.nbrEtudiants().subscribe(resp=>{
            this.etudiants=resp;
        }, err => {

        });


    }
    nbrQuizsManagers(){



        let profile:any;
        this.auth.getProfile().subscribe(resp => {
            profile=resp;

            this.auth.nbrQuizsManager(profile.id).subscribe(resp2=>{
                this.quizsManager=resp2;
            })

        }, err => {

        });




    }


    nbrRepQuiz(){



        let profile:any;
        this.auth.getProfile().subscribe(resp => {
            profile=resp;

            this.auth.nbrRepQuizsManager(profile.id).subscribe(resp2=>{
                this.quizsReponse=resp2;
            })

        }, err => {

        });




    }
    nbrMessageriesEtudiants(){



        this.auth.nbrMessageriesEtudiants().subscribe(resp=>{
            this.messageriesEtudiants=resp;
        }, err => {

        });


    }


    nbrMessageriesManagers(){



        this.auth.nbrMessageriesManagers().subscribe(resp=>{
            this.messageriesManagers=resp;
        }, err => {

        });


    }
    nbrRepCorrecteEtFausse(){

        this.quizService.nbrRepCorrect().subscribe(resp=>{

            this.quizService.nbrRepFausse().subscribe(resp2=>{
                this.nbrRepFausse=resp2;

                this.doughnutChartData = [(((resp/(resp+resp2))*100)),(((resp2/(resp+resp2))*100))];
            })
        })




    }
    nbrMoyenne(){
        let m:number;
        let r:number;
        this.quizService.nbrMoyenne().subscribe(resp=>{
            this.quizService.nbrRed().subscribe(resp2=>{
                m=((resp/(resp+resp2))*100);
                r=((resp2/(resp+resp2))*100);
                this.doughnutChartData2=[m,r]
                this.doughnutChartLabels2[0]='taux des Notes supérieur à 50% reponses correctes'
                this.doughnutChartLabels2[1]='taux des Notes supérieur à 50% reponses fausses'
            })
        })
    }

    offreStatistique(){

        this.auth.offreStat().subscribe(resp=>{
            this.offresStat=resp

        })
    }
    competanceStatistique(){

        this.auth.competanceStat().subscribe(resp=>{
            this.competancesStat=resp

        })
    }

}
