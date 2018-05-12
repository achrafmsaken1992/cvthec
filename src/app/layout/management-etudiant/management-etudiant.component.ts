import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ManagersService} from "../../services/managers.service";
import {EtudiantService} from "../../services/etudiant.service";
declare var jQuery:any;
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {FormGroup} from "@angular/forms";
@Component({
  selector: 'app-management-etudiant',
  templateUrl: './management-etudiant.component.html',
  styleUrls: ['./management-etudiant.component.scss']
})

export class ManagementEtudiantComponent implements OnInit {
    data:any;
    totalPages:number;
    size:number=5;
    page=0;
    pages:Array<number>;
    numberpage:number;
    query:string="";
    rech="prenom";
    prenom="";
    nom="";
rech2="active";
    totalpage:number;
    active=1;
    valide=1;
    da:string;
    constructor(private etudiantService:EtudiantService, public toastr: ToastsManager, vcr: ViewContainerRef) {
        //var d = new Date();
        //d.setTime(451456445614);
        //console.log("gjh"+new Date().getTime().toLocaleString());
        this.toastr.setRootViewContainerRef(vcr)
    }

    ngOnInit() {
        this.chercher();


    }

    search(){





        this.chercher();

    }

    chercher(){
        if(this.rech=="prenom"){
            this.prenom=this.query;
            this.nom="";


        }
        else {
            this.prenom="";
            this.nom=this.query;


        }
        if(this.rech2=="active")
            this.active=1;
        else
            this.active=0;
        this.etudiantService.getEtudiants(this.nom,this.prenom,this.active,this.valide,this.page,this.size).subscribe(data => {
            this.data=data;
            console.log(data);
            this.pages=new Array(data.totalPages);
            this.totalPages=data.totalElements;
            this.numberpage=this.page*this.size+data.numberOfElements;
            this.totalpage=data.totalPages;

        });

    }

    suivant(){

        if(this.page<this.totalpage-1 )
            this.page++
        else
            this.page=0

        this.chercher();

    }
    precedent(){

        if(this.page>0 )
            this.page--
        else {


            this.page=this.totalpage-1;
        }
        this.chercher();

    }

    goto(i:number){
        this.page=i;
        this.chercher();

    }
    register(form:FormGroup){
        this.etudiantService.register(form.value).subscribe(resp=>{

            jQuery('#myModal').modal('toggle');
            this.toastr.success('ajout avec succée', 'Error!');
            form.reset();
            this.chercher();
        },err=>{
            if (err.error.message == "email exist deja")
                this.toastr.success('email exist deja', 'Error!');

        })

    }
    getPhotoCandidate(photo,id){
        return "http://localhost:8080/getPhotoEtudiant/"+photo+"/"+id;
    }
}
