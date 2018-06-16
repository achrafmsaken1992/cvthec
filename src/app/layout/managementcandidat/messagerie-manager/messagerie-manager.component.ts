import { Component, OnInit } from '@angular/core';
import {EtudiantService} from "../../../services/etudiant.service";
import {CandidatService} from "../../../services/candidat.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from '../../../services/auth.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-messagerie-manager',
  templateUrl: './messagerie-manager.component.html',
  styleUrls: ['./messagerie-manager.component.scss']
})
export class MessagerieManagerComponent implements OnInit {
managers:any;
msg:string="";
messages:any[];
manager:any;
profile:any;
mot:string="";
param1:any;

a=0;
active=-1;
id:number;

  constructor(private candidatService:CandidatService,private r:Router,private route: ActivatedRoute,
  private authService:AuthService) {
      if(this.authService.isEtudiant()==false)
      {
          this.r.navigate(['access-denied'])
      }

  }

  ngOnInit() {
      if (this.route.snapshot.params['id'] != undefined)
      {
          if (isNaN(this.route.snapshot.params['id']) == true) {
          this.r.navigate(['access-denied'])
      }
          this.id = parseInt(this.route.snapshot.params['id']);
          this.getProfile();
          this.getManagers();



         }





      else{
          this.getProfile();
          this.getManagers();
      }


          //this.param1 = this.route.snapshot.params.param1;
          //console.log(this.param1+"hello")

  }

  getManagers(){
  this.candidatService.getManagers(this.mot).subscribe(resp=> {
    this.managers = resp;
     let existe=0;

    for (let i = 0; i < this.managers.length; i++) {

        if (this.managers[i].id == this.id) {
            this.manager = this.managers[i];
            existe = 1;
this.active=this.id;

        }
    }
    if (existe == 0 && !isNaN(this.route.snapshot.params['id'] )) {
        this.r.navigate(['access-denied'])
    }
    else {
        this.getMessages(this.manager)
        this.a = 1;
    }


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
      let photo=this.getPhotoCandidate(this.profile.image,this.profile.id);
let message={
  user1:this.profile.id,
  user2:this.manager.id,
    role:"manager",
  message:this.msg,
    image:photo,
    body:this.profile.prenom +"  "+ this.profile.nom +" t'\a envoyé nouveau message "
}
this.candidatService.addMessage(message).subscribe(resp=>{
  this.msg="";
  this.getMessages(this.manager);

},
err=>{

})


  }
    goManager(manager){
        this.getMessages(manager)
        this.active=manager.id;
      this.r.navigateByUrl('messagerie-etudiant/'+manager.id)
    }
    supprimer(manager,id) {
        swal({
            title: 'Etes vous sur?',
            text: '',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, je confirme!',
            cancelButtonText: `Non, j'annule`
        }).then((result) => {
            if (result.value) {

                this.authService.deleteMessage(id).subscribe(resp => {
                    swal(
                        'Supprimer!',
                        'suppression message avec succés',
                        'success'
                    )

                    this.getMessages(manager);
                })


                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal(
                    'Annuler',
                    'suppression message annulée :)',
                    'error'
                )

            }
        })
    }
}
