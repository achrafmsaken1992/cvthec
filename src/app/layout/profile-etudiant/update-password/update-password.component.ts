import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-update-password-rh',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss'],
  animations: [routerTransition()]
})
export class UpdatePasswordRhComponent implements OnInit {
error:String="";
success:String="";
    hide = true;
  constructor(private auth:AuthService) {

  }

  ngOnInit() {
  }
  updatePassword(fo){
    if(fo.valid){
this.auth.updatePassword(fo.value).subscribe(resp=>{
this.error="";
this.success="modification mot de passe avec succée";
fo.reset();
},err=>{
  this.error=err.error.message;
});
    }


  }
  fermer(){
    if(this.success!==''){this.success=''}
  }
}
