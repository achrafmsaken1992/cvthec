import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {CollaborateurService} from "../../services/collaborateur.service";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";
import {routerTransition} from "../../router.animations";
declare var jQuery:any;

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss'],
    animations: [routerTransition()]
})
export class CollaboratorComponent implements OnInit {
    collaborators:any;
    totalPages:number;
    size:number=5;
    page=0;
    pages:Array<number>;
    numberpage:number;
    totalpage:number;
    title="";
    tabTitles:any;
    firstname="";
    lastname="";
    profile:any;

    query="";
find="nom";
    selectedFiles: FileList;
    ext:string="";
  constructor(private colService:CollaborateurService,private auth:AuthService,private router:Router) { }

  ngOnInit() {
      if(this.auth.isEtudiant()===false){
          this.router.navigate(['access-denied']);
      }
      this.chercher();
      this.getProfile()
  }
    updatePhoto(id){
        let photo:string;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        text=text+"."+this.ext;
        photo = text;


        Swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {




                this.colService.uploadPhotoCollaborator(this.selectedFiles.item(0),text,id).subscribe(event => {


                    this.chercher();

                },err=>{

                });

            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })


    }
    getProfile(){
        this.auth.getProfile().subscribe(resp => {
            this.profile = resp;

        }, err => {

        });
    }
    rechercheAvance(){
        if(this.find=="prenom"){
            this.title="";
            this.firstname=this.query;
            this.lastname="";
            this.page=0;
        }
        else if(this.find=="nom"){
            this.title="";
            this.firstname=""
            this.lastname=this.query;
            this.page=0;
        }
        else if(this.find=="titre"){
            this.title=this.query;
            this.firstname=""
            this.lastname="";
            this.page=0;
        }
        this.colService.getCollaborateurs(this.firstname,this.lastname,this.title,this.page,this.size).subscribe(data => {
            this.collaborators=data;

            this.pages=new Array(data.totalPages);
            this.totalPages=data.totalElements;
            this.numberpage=this.page*this.size+data.numberOfElements;
            this.totalpage=data.totalPages;

        });

    }
    chercher(){

        this.colService.getCollaborateurs(this.firstname,this.lastname,this.title,this.page,this.size).subscribe(data => {
            this.collaborators=data;

            this.pages=new Array(data.totalPages);
            this.totalPages=data.totalElements;
            this.numberpage=this.page*this.size+data.numberOfElements;
            this.totalpage=data.totalPages;

        });

    }
    selectFile(event) {
        this.selectedFiles = event.target.files;

        console.log(this.selectedFiles.item(0).name.split('.').pop());
        this.ext=this.selectedFiles.item(0).name.split('.').pop();
        console.log(this.selectedFiles.item(0).size);
    }



    getCvCollaborator(cv,id){

        return "http://localhost:8080/getCvCollaborator/"+cv+"/"+id+"/"+this.profile.companyName;
    }
    getPhotoCollaborator(photo,id){

        return "http://localhost:8080/getPhotoCollaborateur/"+photo+"/"+this.profile.companyName+"/"+id;
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
    modal(id){

        jQuery("#task"+id).modal()



    }
    close(){
        jQuery(".dropdown-toggle").hide();
    }
    open(){
        jQuery(".dropdown-toggle").show();
    }
    date(){

            var now = new Date();
            var today = now.getDate()  + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();

       return    today;

    }
    saveFormation(form){
      if(form.date2==''){
          console.log('hello')
      }
    }
}
