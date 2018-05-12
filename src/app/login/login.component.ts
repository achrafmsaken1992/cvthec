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



            this.auth.login(value).subscribe(resp=>{
                let jwt=resp.headers.get('Authorization');
                console.log(jwt);
                this.auth.saveToken(jwt);
                localStorage.setItem('isLoggedin', 'true');

                this.router.navigate(['dashboard'])
            },err=>{


                swal('Oops...','mot de passe ou email incorrect'+ '!', 'error');

            });
        }

}
