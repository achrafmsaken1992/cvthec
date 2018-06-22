import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {CandidatService} from "../../../services/candidat.service";
import {AuthService} from '../../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';
import {ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent implements OnInit {

  data:any;
  totalPages:number;
  size:number=4;
  page=0;
  pages:Array<number>;
  numberpage:number;
  mot:string="";
  totalpage:number;
isAdmin:boolean;
isEtudiant:boolean;
  constructor(private candidatService:CandidatService,private authService:AuthService,private quizService:QuizService
,private route: ActivatedRoute,private r:Router, private toastr: ToastsManager, vcr: ViewContainerRef) {
    this.isAdmin=this.authService.isAdmin();
    this.isEtudiant=this.authService.isEtudiant()
    this.toastr.setRootViewContainerRef(vcr)
    if(this.authService.isEtudiant()==false && this.authService.isAdmin()==false )
    {
      this.r.navigate(['access-denied'])
    }

  }

  ngOnInit() {
    this.getOffres();
    console.log(this.data)
  }
getOffres(){
  this.candidatService.getOffers(this.mot,this.page,this.size).subscribe(data => {
    this.data = data;
    console.log(data);
    this.pages = new Array(data.totalPages);
    this.totalPages = data.totalElements;
    this.numberpage = this.page * this.size + data.numberOfElements;
    this.totalpage = data.totalPages;
  },err=>{
    console.log("erreur")
  });
}
chercher(){
  this.getOffres();
}
  suivant(){

    if(this.page<this.totalpage-1 )
      this.page++
    else
      this.page=0

    this.chercher();

  }
  precedent(){

    if(this.page>0 )
      this.page--
    else {


      this.page=this.totalpage-1;
    }
    this.chercher();

  }

  goto(i:number){
    this.page=i;
    this.chercher();

  }
  getPhotoOffre(photo,id,entreprise){

    return "http://localhost:8080/getPhotoOffreByManager/"+photo+"/"+id+"/"+entreprise;
  }
  goQuizs(id){
    this.quizService.nbrQuizsOffre(id).subscribe(resp=>{
      if(resp!=0)
        this.r.navigateByUrl('/quizs/'+id)
      else
        this.toastr.info('il n`\ y a aucun quiz pour cette offre  ', null, {enableHTML: true});
    })


  }
}
