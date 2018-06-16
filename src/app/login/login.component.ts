import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AuthService} from "../services/auth.service";
import swal from 'sweetalert2';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router,public auth: AuthService) {}

    ngOnInit() {}





    onLoggedin({value,valid}) {
let aux:any;


            this.auth.login(value).subscribe(resp=>{

                this.auth.isActive(value.email).subscribe(resp2=>{







                        let jwt = resp.headers.get('Authorization');
                        console.log(jwt);
                        this.auth.saveToken(jwt);
                        localStorage.setItem('isLoggedin', 'true');

                        this.router.navigate(['dashboard'])

                },err=>{
                    if(err.error.message=="erreur1")
                    swal('Oops...','veuillez activer votre compte par email'+ '!', 'error');
                    if(err.error.message=="erreur2")
                        swal('Oops...','veuillez attendre la validation du compte '+ '!', 'error');
                })




                },err=>{

                        swal('Oops...','mot de passe ou email incorrect'+ '!', 'error');

                })



        }

}
