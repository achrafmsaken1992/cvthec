import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
import {routerTransition} from "../../../router.animations";

import {CandidatService} from '../../../services/candidat.service';
import {EtudiantService} from '../../../services/etudiant.service';

declare var jQuery:any;
@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.scss'],
  animations: [routerTransition()]
})
export class ListeEtudiantComponent implements OnInit {
advanced:number=-1;
competances:any;
  data:any;
  totalPages:number;
  size:number=5;
  page=0;
  pages:Array<number>;
  numberpage:number;
  nom:string="";
  totalpage:number;
  langue:string="";
  competance:string="";
  experience:string="";
  formation:string="";
  pren:string="";

  constructor(private candidatService:CandidatService,private etudiantService:EtudiantService,private r:Router) { }

  ngOnInit() {
    this.rechEtudiants();
    this.getTitreCompetance();

  }
  getTitreCompetance() {
    this.candidatService.getTitreCompetances().subscribe(resp => {
      this.competances = resp;
    })
  }
    rechEtudiants(){
      this.etudiantService.rechEtudiants(this.nom, this.pren, this.langue, this.competance, this.experience, this.formation, this.page, this.size).subscribe(data=>{
this.data=data;
console.log(data)
        this.pages = new Array(data.totalPages);
        this.totalPages = data.totalElements;
        this.numberpage = this.page * this.size + data.numberOfElements;
        this.totalpage = data.totalPages;
      })


    }
  getPhotoCandidate(photo,id){

    return "http://localhost:8080/getPhotoEtudiant/"+photo+"/"+id;
  }
  suivant(){

    if(this.page<this.totalpage-1 )
      this.page++
    else
      this.page=0

    this.rechEtudiants();

  }
  precedent(){

    if(this.page>0 )
      this.page--
    else {


      this.page=this.totalpage-1;
    }
    this.rechEtudiants();

  }

  goto(i:number){
    this.page=i;
    this.rechEtudiants();

  }
  voirProfile(id:number){
    this.r.navigate(['profile-etudiant',id])
  }
}
