import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../router.animations";
import swal from 'sweetalert2';
import {AuthService} from "../services/auth.service";
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
  animations: [routerTransition()]
})
export class ForgetPasswordComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
  resetPassword(form){
    this.auth.resetPassword(form.value.email).subscribe(resp=>{
      swal( '','vous devez confirmer par email','success');
    },err=>{


      swal('Oops...','email n\'existe pas!', 'error');

    });
  }
}
