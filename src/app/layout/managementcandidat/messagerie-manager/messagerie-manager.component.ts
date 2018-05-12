import { Component, OnInit } from '@angular/core';
import {EtudiantService} from "../../../services/etudiant.service";
import {CandidatService} from "../../../services/candidat.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-messagerie-manager',
  templateUrl: './messagerie-manager.component.html',
  styleUrls: ['./messagerie-manager.component.scss']
})
export class MessagerieManagerComponent implements OnInit {
managers:any;
msg:string="";
messages:any;
manager:any;
profile:any;
mot:string="";
param1:any;

a=0;
active=-1;
  constructor(private candidatService:CandidatService,private r:Router,private route: ActivatedRoute) { }

  ngOnInit() {

          //this.param1 = this.route.snapshot.params.param1;
          //console.log(this.param1+"hello")
this.getProfile();
this.getManagers();
  }

  getManagers(){
  this.candidatService.getManagers(this.mot).subscribe(resp=> {
    this.managers = resp;
  },err=>{
   console.log(err)
    })
  }
chercher(){
this.getManagers();
}

getProfile()
{this.profile=this.candidatService.getCandidat().subscribe(resp=>{
      this.profile=resp;
    },
    err=>{
      console.log(err);
    })

}

getMessages(manager){
    this.a=1;

    this.manager=manager;
this.candidatService.getMessageries(this.profile.id,this.manager.id).subscribe(resp=>{
  this.messages=resp;
},err=>{
  console.log(err);
})

}



  getPhotoManager(image,id){

    return "http://localhost:8080/getPhotoManager/"+image+"/"+id;
  }
  getPhotoCandidate(photo,id){
    return "http://localhost:8080/getPhotoEtudiant/"+photo+"/"+id;
  }
  addMessage(){
let message={
  user1:this.profile.id,
  user2:this.manager.id,
  message:this.msg
}
this.candidatService.addMessage(message).subscribe(resp=>{
  this.msg="";
  this.getMessages(this.manager);

},
err=>{

})


  }
}
