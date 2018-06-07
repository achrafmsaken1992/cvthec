import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
import {routerTransition} from "../../../router.animations";

import {CandidatService} from '../../../services/candidat.service';

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
  constructor(private candidatService:CandidatService) { }

  ngOnInit() {
    this.getTitreCompetance();
  }
  getTitreCompetance(){
    this.candidatService.getTitreCompetances().subscribe(resp=>{
      this.competances = resp;
    })
  }

}
