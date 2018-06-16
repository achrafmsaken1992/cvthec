
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {routerTransition} from "../../../../router.animations";
import {CandidatService} from "../../../../services/candidat.service";
import Swal from 'sweetalert2';
declare var jQuery:any;






@Component({
  selector: 'app-modal-add-experience',
  templateUrl: './modal-add-experience.component.html',
  styleUrls: ['./modal-add-experience.component.scss'],

  animations: [routerTransition()]
})
export class ModalAddExperienceComponent  {
date1:number=0;
d:string;

  @Output() send = new EventEmitter<number>();
  constructor(private candidatservice: CandidatService ) { }

saveExperience(form: FormGroup){

 if(form.value.date1==null ||form.value.date1=="")
   this.date1=1;
 else{

if(form.valid) {
  var date = new Date(form.value.date1),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
  form.value.date1 = [date.getFullYear(), mnth, day].join("-");
  if(form.value.date2==null )
    form.value.date2="present";
  else
  {
    var date2 = new Date(form.value.date2),
        mnth2 = ("0" + (date2.getMonth() + 1)).slice(-2),
        day2 = ("0" + date2.getDate()).slice(-2);
    form.value.date2 = [date2.getFullYear(), mnth2, day2].join("-");
  }



  this.candidatservice.saveExperience(form.value).subscribe(resp => {


    form.reset();
    this.send.emit();
    jQuery(".modal").hide();
    jQuery("div").removeClass("modal-backdrop");
    jQuery("body").removeClass("modal-open ");
    Swal(
        'Ajout experience!',
        'Ajout experience  avec succée.',
        'success'
    )
//   console.log("oui");
  }, err => {



  //  console.log("non");
  });



}
  //this.d=form.value.date1;
//console.log(form.value.date1);
  //form.reset();
  }
}

}
