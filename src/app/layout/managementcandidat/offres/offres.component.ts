import { Component, OnInit } from '@angular/core';
import {CandidatService} from "../../../services/candidat.service";

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

  constructor(private candidatService:CandidatService) { }

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
}
