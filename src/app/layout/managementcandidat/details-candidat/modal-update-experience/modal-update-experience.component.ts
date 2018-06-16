import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {routerTransition} from "../../../../router.animations";
import {CandidatService} from "../../../../services/candidat.service";
import Swal from 'sweetalert2';
declare var jQuery:any;
@Component({
  selector: 'app-modal-update-experience',
  templateUrl: './modal-update-experience.component.html',
  styleUrls: ['./modal-update-experience.component.scss'],
    animations: [routerTransition()]
})
export class ModalUpdateExperienceComponent implements OnInit {

    @Output() send = new EventEmitter<number>();
    @Input() experience: any;
    date1: number = 0;
    d: string;

    constructor(private candidatservice: CandidatService) {
    }

    ngOnInit() {
    }

    updateExperience(form) {


        if (form.value.date1 == null || form.value.date1 == "") {
            this.date1 = 1;
            console.log("non");
        }
        else {

            if (form.valid) {
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
                form.value.id=this.experience.id;
                this.candidatservice.updateExperience(form.value).subscribe(resp=>{
                    this.send.emit();
                    jQuery("div").removeClass("modal-backdrop");
                    jQuery("body").removeClass("modal-open ");
                    Swal(
                        'modification experience!',
                        'modification experience  avec succée.',
                        'success'
                    )
                },err=>{

                })

            }
        }
    }
}
