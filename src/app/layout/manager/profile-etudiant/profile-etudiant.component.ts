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
id:any;

  constructor(public _location: Location,private etudiantservice: EtudiantService,
              private r:Router,private route: ActivatedRoute,private authService:AuthService) {
    if (this.authService.isManeger() == false && this.authService.isAdmin() == false) {
      this.r.navigate(['access-denied'])
    }
  }
    ngOnInit() {



    this.id= this.route.snapshot.params['id'];
    if(isNaN(this.id) || this.id<=0){
      this.r.navigate(['access-denied'])
    }
    this.getCandidat();

  }

getCandidat(){



    this.etudiantservice.getEtudiantById(this.id).subscribe(resp => {
      this.candidat = resp;


      if (resp.nomEntreprise != null)
        this.r.navigate(['access-denied'])

    }, err => {

    })


}

  getPhotoCandidate(photo,id){

    return "http://localhost:8080/getPhotoEtudiant/"+photo+"/"+id;
  }
  backClicked(){
    this._location.back();
  }

}
