import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {AuthService} from "../../../services/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';

profile:any;
    constructor(private translate: TranslateService, public router: Router,private auth:AuthService) {


        this.auth.getProfile().subscribe(resp => {
            this.profile = resp;

        }, err => {

        });

    }

    ngOnInit() {


    }



    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        this.auth.logout();
        localStorage.removeItem('isLoggedin');
        this.router.navigate(["accueil"])
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
    getPhotoProfil(photo){

        return "http://localhost:8080/getPhotoProfile/"+photo+"/"+this.profile.companyName+"/"+this.profile.id;
    }
}
