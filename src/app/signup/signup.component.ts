import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { routerTransition } from '../router.animations';
import {AuthService} from "../services/auth.service";

import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(public router: Router, private auth: AuthService, public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
    }

    register(form) {
        //egret-indigo


        if (form.valid) {

            this.auth.register(form.value).subscribe(resp => {

                this.toastr.success('inscription avec succee', 'Error!');


            }, err => {
                if (err.error.message == "email exist deja")
                    this.toastr.success('email exist deja', 'Error!');

                else if (err.error.message == "nom de la societé existe deja") {
                    this.toastr.success('nom de la societé existe deja', 'Error!');
                }

            });

        }
    }
}
