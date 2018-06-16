import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CandidatService} from "../../../../services/candidat.service";

import {routerTransition} from "../../../../router.animations";
import {FlashMessagesService} from "angular2-flash-messages";
import Swal from 'sweetalert2';
declare var jQuery:any;
@Component({
  selector: 'app-modal-add-formation',
  templateUrl: './modal-add-formation.component.html',
  styleUrls: ['./modal-add-formation.component.scss'],
  animations: [routerTransition()]
})
export class ModalAddFormationComponent implements OnInit {

  @Output() send = new EventEmitter<number>();
  results = [
    {value: 'moyen', viewValue: 'moyen'},
    {value: 'assez bien', viewValue: 'assez bien'},
    {value: 'bien', viewValue: 'bien'},
    {value: 'tres bien', viewValue: 'tres bien'},
    {value: 'excellent', viewValue: 'excellent'}
  ];
  date1:number=0;
  selected:string="moyen";
  constructor(private candidatservice: CandidatService, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }
  saveFormation(form: FormGroup){

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

        console.log(form.value.date1);

        this.candidatservice.saveFormation(form.value).subscribe(resp => {


          form.reset();

            this.send.emit();
//   console.log("oui");
          jQuery(".modal").hide();
          jQuery("div").removeClass("modal-backdrop");
          jQuery("body").removeClass("modal-open ");
          Swal(
              'Ajout formation!',
              'Ajout formation  avec succée.',
              'success'
          )
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
