import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CandidatService} from "../../../../services/candidat.service";



declare var jQuery:any;
@Component({
  selector: 'app-modal-update-formation',
  templateUrl: './modal-update-formation.component.html',
  styleUrls: ['./modal-update-formation.component.scss']
})
export class ModalUpdateFormationComponent implements OnInit {

    @Input() formation: any;
    @Output() send = new EventEmitter<number>();
    results = [
        {value: 'moyen', viewValue: 'moyen'},
        {value: 'assez bien', viewValue: 'assez bien'},
        {value: 'bien', viewValue: 'bien'},
        {value: 'tres bien', viewValue: 'tres bien'},
        {value: 'excellent', viewValue: 'excellent'}
    ];
    date1: number = 0;
    selected: string = "moyen";

    constructor(private candidatService:CandidatService) {
    }

    ngOnInit() {
    }

    updateFormation(form) {

        if (form.value.date1 == null || form.value.date1 == "")
            this.date1 = 1;
        else {

            if (form.valid) {
                var date = new Date(form.value.date1),
                    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                    day = ("0" + date.getDate()).slice(-2);
                form.value.date1 = [date.getFullYear(), mnth, day].join("-");
                if (form.value.date2 == null)
                    form.value.date2 = "present";
                else {
                    var date2 = new Date(form.value.date2),
                        mnth2 = ("0" + (date2.getMonth() + 1)).slice(-2),
                        day2 = ("0" + date2.getDate()).slice(-2);
                    form.value.date2 = [date2.getFullYear(), mnth2, day2].join("-");
                }
                form.value.id = this.formation.id;
                console.log(form.value.date1);
this.candidatService.updateFormation(form.value).subscribe(resp=>{
    this.send.emit();
    jQuery("div").removeClass("modal-backdrop");
    jQuery("body").removeClass("modal-open ");

},err=>{

})
            }
        }
    }
}
