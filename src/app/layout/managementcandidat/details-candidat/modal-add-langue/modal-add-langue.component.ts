import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CandidatService} from "../../../../services/candidat.service";
import {routerTransition} from "../../../../router.animations";
import {FormGroup} from "@angular/forms";
import {FlashMessagesService} from "angular2-flash-messages";
import Swal from 'sweetalert2';
declare var jQuery:any;
@Component({
  selector: 'app-modal-add-langue',
  templateUrl: './modal-add-langue.component.html',
  styleUrls: ['./modal-add-langue.component.scss'],
  animations: [routerTransition()]
})
export class ModalAddLangueComponent implements OnInit {

  @Output() send = new EventEmitter<number>();
  langs:any;
  options:any;
  rech:string="";
  constructor(private candidatservice: CandidatService,private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.getTitesLangues();
  }
  saveLangue(form: FormGroup){
    if(form.valid) {

      this.candidatservice.saveLangue(form.value).subscribe(resp => {


        form.reset();


        this.send.emit();
        jQuery(".modal").hide();
        jQuery("div").removeClass("modal-backdrop");
        jQuery("body").removeClass("modal-open ");
        Swal(
            'Ajout langue!',
            'Ajout langue  avec succée.',
            'success'
        )
      }, err => {



        //  console.log("non");
      });
    }

  }
  getTitesLangues(){
    this.candidatservice.getLangues().subscribe(resp=>{
      this.langs=resp;
      this.options = this.langs.filter(word=>word.toUpperCase().includes(this.langs.name.toUpperCase()));
    })


  }
  change(){
    this.options = this.langs.filter(word=>word.toUpperCase().includes(this.rech.toUpperCase()));
  }

}
