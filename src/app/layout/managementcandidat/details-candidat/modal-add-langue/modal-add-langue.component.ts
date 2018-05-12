import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CandidatService} from "../../../../services/candidat.service";
import {routerTransition} from "../../../../router.animations";
import {FormGroup} from "@angular/forms";
import {FlashMessagesService} from "angular2-flash-messages";
@Component({
  selector: 'app-modal-add-langue',
  templateUrl: './modal-add-langue.component.html',
  styleUrls: ['./modal-add-langue.component.scss'],
  animations: [routerTransition()]
})
export class ModalAddLangueComponent implements OnInit {

  @Output() send = new EventEmitter<number>();

  constructor(private candidatservice: CandidatService,private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }
  saveLangue(form: FormGroup){
    if(form.valid) {

      this.candidatservice.saveLangue(form.value).subscribe(resp => {


        form.reset();

        this._flashMessagesService.show('ajout avec succée!', { cssClass: 'alert-success', timeout: 3200 });
        this.send.emit();
      }, err => {



        //  console.log("non");
      });
    }

  }
}
