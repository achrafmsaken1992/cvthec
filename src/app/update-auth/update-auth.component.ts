import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../router.animations";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import swal from 'sweetalert2';
@Component({
  selector: 'app-update-auth',
  templateUrl: './update-auth.component.html',
  styleUrls: ['./update-auth.component.scss'],
  animations: [routerTransition()]
})
export class UpdateAuthComponent implements OnInit {
  token:string;

  constructor(private activeRoute:ActivatedRoute,private auth: AuthService,public router: Router) {
  this.token =this.activeRoute.snapshot.params['token'];
  }

  ngOnInit() {
    console.log(this.token);
  }
  updatePassword(fo){
    fo.value.token=this.token;
    this.auth.recoveryPassword(fo.value).subscribe(resp => {
      swal('mise a jour mot de passe avec succée!', 'success');
      this.router.navigate(['login']);


    }, err => {


      swal('opps..',err.error.message+'!', 'error');

    });

  }

}
