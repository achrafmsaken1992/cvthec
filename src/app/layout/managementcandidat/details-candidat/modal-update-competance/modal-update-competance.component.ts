import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CandidatService} from "../../../../services/candidat.service";


import {routerTransition} from "../../../../router.animations";
declare var jQuery:any;
@Component({
    selector: 'app-modal-update-competance',
    templateUrl: './modal-update-competance.component.html',
    styleUrls: ['./modal-update-competance.component.scss'],
    animations: [routerTransition()]
})
export class ModalUpdateCompetanceComponent implements OnInit {
    options:any;
    note:string;
    success:boolean=false;
    rech:string="";

    cmps:any;
    evaluations = [
        {value: 'non évalué', viewValue: 'non évalué'},
        {value: 'débutant', viewValue: 'débutant'},
        {value: 'intermédiaire', viewValue: 'intermédiaire'},
        {value: 'confirmé', viewValue: 'confirmé'},
        {value: 'expert', viewValue: 'expert'}
    ];

    @Input() skill: any;
    @Output() send = new EventEmitter<number>();


    constructor(private candidatService:CandidatService) { }

    ngOnInit() {
        this.getTitesCompetances();
    }
    change(){
        this.options = this.cmps.filter(word=>word.toUpperCase().includes(this.rech.toUpperCase()));
    }
    store(){
        this.send.emit();

    }
    updateCompetance(fo){

        if(fo.value.certificat==""||fo.value.note==null)
            fo.value.certificat="non certifié";
        fo.value.id=this.skill.id;


        this.candidatService.updateCompetance(fo.value).subscribe(resp =>{

            this.store();

            jQuery("div").removeClass("modal-backdrop");
            jQuery("body").removeClass("modal-open ");

        } ,err=>{

        })
    }
    getTitesCompetances(){
        this.candidatService.getTitreCompetances().subscribe(resp=>{
            this.cmps=resp;
            this.options = this.cmps.filter(word=>word.toUpperCase().includes(this.skill.name.toUpperCase()));
        })
    }

}
