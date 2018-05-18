import { Component, OnInit } from '@angular/core';
import {QuizService} from "../../../services/quiz.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
quizs:any;
id:number;
n:number=0;

  constructor(private r:Router
      ,private route: ActivatedRoute,public quizService:QuizService) { this.id= this.route.snapshot.params['id'];

    this.getQuizs(); }

  ngOnInit() {
    this.tickTick();
    this.id= this.route.snapshot.params['id'];
    this.getQuizs();
  }
  getQuizs(){
    this.quizService.getQuizs(this.id).subscribe(resp=>{
      this.quizs=resp;
    },err=>{

    })
  }
 /* ngOnDestroy(){
    alert('hello')
  }*/
  timeString : string;
  // duration = 10*60;
  duration = 20;
  seconds = "--";
  minutes = "--";
  clockDisplay : string;
  interval: number;
  tickTick(){
    if(this.duration>0) {
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
      }
    }else{
      alert("fin de temps")
    }
  }



}
