import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {EtudiantService} from "../../../services/etudiant.service";
import {Location} from '@angular/common';
@Component({
  selector: 'app-profile-etudiant',
  templateUrl: './profile-etudiant.component.html',
  styleUrls: ['./profile-etudiant.component.scss']
})
export class ProfileEtudiantComponent implements OnInit {
candidat:any;
id:number;

  constructor(public _location: Location,private route: ActivatedRoute,private etudiantservice: EtudiantService) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id'];
    this.getCandidat();

  }

getCandidat(){
  this.etudiantservice.getEtudiantById(this.id).subscribe(resp=>{
    this.candidat=resp;

  })

}

  getPhotoCandidate(photo,id){

    return "http://localhost:8080/getPhotoEtudiant/"+photo+"/"+id;
  }
  backClicked(){
    this._location.back();
  }

}
