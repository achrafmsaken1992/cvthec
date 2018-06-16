import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CandidatService} from "../../../../services/candidat.service";
import {routerTransition} from "../../../../router.animations";
import Swal from 'sweetalert2';
declare var jQuery:any;

@Component({
  selector: 'app-modal-update-langue',
  templateUrl: './modal-update-langue.component.html',
  styleUrls: ['./modal-update-langue.component.scss'],
    animations: [routerTransition()]
})
export class ModalUpdateLangueComponent implements OnInit {

    @Input() langue: any;
    @Output() send = new EventEmitter<number>();
langs:any;
options:any;
    rech:string="";
  constructor(private candidatService:CandidatService) { }
lang:string="";
  ngOnInit() {
      this.getTitesLangues();
  }
    updateLangue(fo){
        fo.value.id=this.langue.id;
      this.candidatService.updateLangue(fo.value).subscribe(resp=>{
          this.send.emit();

          jQuery("div").removeClass("modal-backdrop fade show ");
          jQuery("body").removeClass("modal-open ");
          Swal(
              'modification langue!',
              'modification langue  avec succée.',
              'success'
          )
      },err=>{

      });
    }
    getTitesLangues(){
        this.candidatService.getLangues().subscribe(resp=>{
            this.langs=resp;
            this.options = this.langs.filter(word=>word.toUpperCase().includes(this.langs.name.toUpperCase()));
        })


    }
    change(){
        this.options = this.langs.filter(word=>word.toUpperCase().includes(this.rech.toUpperCase()));
    }


}
