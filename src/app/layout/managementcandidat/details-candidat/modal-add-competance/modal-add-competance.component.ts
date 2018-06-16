import {Component, EventEmitter, Input, OnInit, Output, ViewContainerRef} from '@angular/core';
import {CandidatService} from "../../../../services/candidat.service";

import {FormGroup} from "@angular/forms";
import {routerTransition} from "../../../../router.animations";

import Swal from 'sweetalert2';
declare var jQuery:any;
@Component({
  selector: 'app-modal-add-competance',
  templateUrl: './modal-add-competance.component.html',
  styleUrls: ['./modal-add-competance.component.scss'],
  animations: [routerTransition()]
})
export class ModalAddCompetanceComponent implements OnInit {
rech:string="";
    options:any;

cmps:any;
  competances = [

    {value: 'débutant', viewValue: 'débutant'},
    {value: 'intermédiaire', viewValue: 'intermédiaire'},
{value: 'confirmé', viewValue: 'confirmé'},
{value: 'expert', viewValue: 'expert'}
  ];
  selected:string="debutant";

  @Output() send = new EventEmitter<number>();

 store(){
    this.send.emit();

  }
  constructor(private candidatservice: CandidatService) {

 }

  ngOnInit() {
this.getTitesCompetances();

  }
change(){
    this.options = this.cmps.filter(word=>word.toUpperCase().includes(this.rech.toUpperCase()));
}
  saveCompetance(form: FormGroup) {
if(form.valid){
    if(form.value.certificat==""||form.value.note==null)
        form.value.certificat="non certifié";
if(form.value.note=="" ||form.value.note==null)
    form.value.note="non évalué";



      console.log(form.value)
      this.candidatservice.saveCompetance(form.value).subscribe(resp => {


        form.reset();
this.store();
          jQuery(".modal").hide();
          jQuery("div").removeClass("modal-backdrop");
          jQuery("body").removeClass("modal-open ");
          Swal(
              'Ajout competance!',
              'Ajout competance  avec succée.',
              'success'
          )
      }, err => {



        //  console.log("non");
      });
    }
  }
  getTitesCompetances(){
     this.candidatservice.getTitreCompetances().subscribe(resp=>{
         this.cmps=resp;
         this.options=this.cmps;
     })
  }
}
