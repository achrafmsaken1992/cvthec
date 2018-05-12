import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CandidatService} from "../../../../services/candidat.service";
import {routerTransition} from "../../../../router.animations";
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

  constructor(private candidatService:CandidatService) { }

  ngOnInit() {
  }
    updateLangue(fo){
        fo.value.id=this.langue.id;
      this.candidatService.updateLangue(fo.value).subscribe(resp=>{
          this.send.emit();

          jQuery("div").removeClass("modal-backdrop fade show ");
          jQuery("body").removeClass("modal-open ");
      },err=>{

      });
    }


}
