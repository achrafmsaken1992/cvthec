import { Component, OnInit } from '@angular/core';

import {ManagersService} from "../../services/managers.service";
import swal from 'sweetalert2';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-liste-entreprise',
  templateUrl: './liste-entreprise.component.html',
  styleUrls: ['./liste-entreprise.component.scss']
})
export class ListeEntrepriseComponent implements OnInit {

  data:any;
  totalPages:number;
  size:number=5;
  page=0;
  pages:Array<number>;
  numberpage:number;
  query:string;
  rech="prenom";
  prenom=""
  nom="";
  societe="";
  totalpage:number;
  active=1;
  valide=1;
  date="";
  isAdmin:boolean;
  constructor(private managerService:ManagersService,private authService:AuthService,
              private r:Router,private route: ActivatedRoute) {
    if(this.authService.isAdmin()==false && this.authService.isEtudiant()==false )
    {
      this.r.navigate(['access-denied'])
    }
    this.isAdmin=this.authService.isAdmin();
  }

  ngOnInit() {

    this.chercher();


  }
  refuser(id){
    swal({
      title: 'Etes vous sur?',
      text: '',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, je confirme!',
      cancelButtonText: `Non, j'annule`
    }).then((result) => {
      if (result.value) {

        this.managerService.refuseManager(id).subscribe(resp=>{
          this.chercher();
        })



        swal(
            'Supprimer!',
            'Supprimer entreprise avec succés',
            'success'
        )








        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal(
            'Annuler',
            'refuser entreprise annulé :)',
            'error'
        )
      }
    })





  }
  accepter(id){
    swal({
      title: 'Etes vous sur?',
      text: '',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, je confirme!',
      cancelButtonText: `Non, j'annule`
    }).then((result) => {
      if (result.value) {

        this.managerService.valideCompteManager(id).subscribe(resp=>{
          this.chercher();
        })



        swal(
            'Validation!',
            'validation entreprise avec succés',
            'success'
        )








        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal(
            'Annuler',
            'validation entreprise annulé :)',
            'error'
        )
      }
    })







  }

  search(){



    if(this.rech=="prenom"){
      this.prenom=this.query;
      this.nom="";
      this.societe="";

    }
    else if(this.rech=="nom"){
      this.prenom="";
      this.nom=this.query;
      this.societe="";

    }
    else {
      this.prenom="";
      this.nom="";
      this.societe=this.query;

    }
    this.chercher();

  }

  chercher(){
    this.managerService.getManagers(this.nom,this.prenom,this.societe,this.active,this.valide,this.page,this.size).subscribe(data => {
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
  getPhotoManager(image,id){

    return "http://localhost:8080/getPhotoManager/"+image+"/"+id;
  }

}
