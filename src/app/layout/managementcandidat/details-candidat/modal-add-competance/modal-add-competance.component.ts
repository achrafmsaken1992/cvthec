import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CandidatService} from "../../../../services/candidat.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {FormGroup} from "@angular/forms";
import {routerTransition} from "../../../../router.animations";
@Component({
  selector: 'app-modal-add-competance',
  templateUrl: './modal-add-competance.component.html',
  styleUrls: ['./modal-add-competance.component.scss'],
  animations: [routerTransition()]
})
export class ModalAddCompetanceComponent implements OnInit {
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
  constructor(private candidatservice: CandidatService, private _flashMessagesService2: FlashMessagesService) {
  }

  ngOnInit() {

  }

  saveCompetance(form: FormGroup) {
if(form.valid){
    if(form.value.certificat==""||form.value.note==null)
        form.value.certificat="non certifié";
if(form.value.note=="" ||form.value.note==null)
    form.value.note="non évalué";



      console.log(form.value)
      this.candidatservice.saveCompetance(form.value).subscribe(resp => {

        this._flashMessagesService2.show('ajout avec succée!', {cssClass: 'alert-success', timeout: 3300});
        form.reset();
this.store();


      }, err => {



        //  console.log("non");
      });
    }
  }
}
