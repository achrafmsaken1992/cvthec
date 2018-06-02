import { Component, OnInit } from '@angular/core';
import {ManagersService} from "../../../services/managers.service";

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.scss']
})
export class MessagerieComponent implements OnInit {
profile:any;
mot:string="";
etudiants:any;
msg="";
  a=0;
  active=-1;
  messages:any;
  etudiantP:any;
  constructor(private managerService:ManagersService) { }

  ngOnInit() {

    this.getProfile();
    this.getEtudiants();
  }
  getProfile(){
    this.managerService.managerProfile().subscribe(resp=>{
      this.profile=resp;
    },err=>{
      console.log(err);
    })
  }
  getEtudiants(){
this.managerService.getEtudiantMessagerie(this.mot).subscribe(resp=>{
  this.etudiants=resp;
},err=>{
  console.log(err)
})


  }
  getPhotoManager(image,id){

    return "http://localhost:8080/getPhotoManager/"+image+"/"+id;
  }
  getPhotoCandidate(photo,id){
    return "http://localhost:8080/getPhotoEtudiant/"+photo+"/"+id;
  }
  getMessages(etudiant){
    this.a=1;

    this.etudiantP=etudiant;
    this.managerService.getMessageries(this.profile.id,this.etudiantP.id).subscribe(resp=>{
      this.messages=resp;
    },err=>{
      console.log(err);
    })

  }
  chercher(){
    this.getEtudiants();
  }

  addMessage(){
    let photo=this.getPhotoManager(this.profile.image,this.profile.nomEntreprise);
    let message={
      user1:this.profile.id,
      user2:this.etudiantP.id,
      message:this.msg,
      image:photo,
      body:this.profile.prenom +"  "+ this.profile.nom +" t'\a envoyé nouveau message "
    }
    this.managerService.addMessage(message).subscribe(resp=>{
          this.msg="";

          this.getMessages(this.etudiantP);

        },
        err=>{

        })


  }
}
