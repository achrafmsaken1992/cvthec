import {Component, Input, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import {AuthService} from "../../../services/auth.service";
import {CandidatService} from "../../../services/candidat.service";
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    animations: [
        trigger('slideInOut', [
            state('in', style({
                transform: 'translate3d(-90%, 0, 0)'
            })),
            state('out', style({
                transform: 'translate3d(0%, 0, 0)'
            })),
            transition('in => out', animate('600ms ease-in-out')),
            transition('out => in', animate('600ms ease-in-out'))
        ]),
    ]
})
export class SidebarComponent implements OnInit{
    isActive: boolean = false;
    showMenu: string = '';
    pushRightClass: string = 'push-right';
    @Input() menuState: string = 'in';
    isEtudiant:boolean;
    isManager:boolean;
    isAdmin:boolean;

profile:any;
    constructor(private translate: TranslateService, public router: Router,private auth:AuthService
     )  {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('fr');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });

    }
    ngOnInit() {
        this.isEtudiant= this.auth.isEtudiant();
        this.isManager= this.auth.isManeger();
        this.isAdmin= this.auth.isAdmin();
//this.getProfile();
    }
   /* getProfile() {
        if (this.isEtudiant) {
            this.auth.getProfile().subscribe(resp => {
                this.profile = resp;

            }, err => {

            });
        }
    }*/

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
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

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
    toggleMenu() {
        // 1-line if statement that toggles the value:
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }

}
