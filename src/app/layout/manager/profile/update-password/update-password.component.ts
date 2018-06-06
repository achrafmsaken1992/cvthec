import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
declare var jQuery:any;
import swal from 'sweetalert2';
@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
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



        fo.reset();

        swal(
            'Mise a jour mot de passe!',
            'Modification mot de passe avec succés',
            'success'
        )
        jQuery('.modal').hide();
        jQuery("div").removeClass("modal-backdrop");
        jQuery("body").removeClass("modal-open ");
        jQuery("div").removeClass("show");

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

