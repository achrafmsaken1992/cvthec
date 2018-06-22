import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ManagersService} from "../../services/managers.service";
import {EtudiantService} from "../../services/etudiant.service";
declare var jQuery:any;
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {FormGroup} from "@angular/forms";
import swal from 'sweetalert2';
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
    constructor(private etudiantService:EtudiantService, public toastr: ToastsManager, vcr: ViewContainerRef
        ,private authService:AuthService,
                private r:Router,private route: ActivatedRoute
    ) {
        if(this.authService.isAdmin()==false)
        {
            this.r.navigate(['access-denied'])
        }
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

        if(form.value){
            var date = new Date(form.value.dateNaissance),
                mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                day = ("0" + date.getDate()).slice(-2);
            form.value.dateNaissance = [date.getFullYear(), mnth, day].join("-");

            form.value.dateNaissance=form.value.dateNaissance.substr(0,10)



            this.etudiantService.register(form.value).subscribe(resp => {

                jQuery('#myModal').modal('toggle');
                this.toastr.success('ajout etudiant avec succée', 'succés!');
                form.reset();
                this.chercher();
            }, err => {
                if (err.error.message == "email exist deja")
                    this.toastr.success('email exist deja', 'Erreur!');

            })
        }
    }
    getPhotoCandidate(photo,id){
        return "http://localhost:8080/getPhotoEtudiant/"+photo+"/"+id;
    }
    supprimer(id){
        swal({
            title: 'Etes vous sur?',
            text: '',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, je confirme!',
            cancelButtonText: `Non, j'annule`
        }).then((result) => {
            if (result.value) {


                this.authService.deleteEtudiant(id).subscribe(resp=>{
                    this.chercher();
                })




                swal(
                    'Supprimer!',
                    'Suppression etudiant avec succés',
                    'success'
                )








                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal(
                    'Annuler',
                    'Suppression etudiant annulé :)',
                    'error'
                )
            }
        })



    }
}
