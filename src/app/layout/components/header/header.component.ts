import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {AuthService} from "../../../services/auth.service";
import {ToastsManager} from "ng2-toastr";
import {MessagingService} from "../../../services/messaging-service.service";
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth }     from 'angularfire2/auth';
import * as firebase from 'firebase';
import {BehaviorSubject} from "rxjs/Rx";
declare var jQuery:any;
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';
    data: any;
    size = 5;
    a = 0;
    profile: any;
    totalpage: number;
    messaging = firebase.messaging()
    currentMessage = new BehaviorSubject(null)
    constructor(private translate: TranslateService, public router: Router, private auth: AuthService, public toastr: ToastsManager, vcr: ViewContainerRef,
               private msgService: MessagingService) {

        this.toastr.setRootViewContainerRef(vcr)

        this.auth.getProfile().subscribe(resp => {


            this.profile = resp;
            this.getNotifications(this.profile.id, this.size);

        }, err => {

        });

    }

    ngOnInit() {
        this.receiveMessage();

        this.auth.getProfile().subscribe(resp => {
            this.msgService.getPermission(resp);
            this.msgService.receiveMessage()


            this.msgService.currentMessage

        })






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

    getPhotoProfil(photo) {

        return "http://localhost:8080/getPhotoProfile/" + photo + "/" + this.profile.companyName + "/" + this.profile.id;
    }

    getNotifications(id, size) {

        this.auth.getNotifications(id, size).subscribe(resp => {
            this.data = resp;




        })

    }

    change() {
        this.size = this.size + 5;
        this.getNotifications(this.profile.id, this.size);
    }

    getPhotoManager(image, id) {

        return "http://localhost:8080/getPhotoManager/" + image + "/" + id;
    }

    isEtudiant() {
        return this.auth.isEtudiant();
    }

    isManager() {
        return this.auth.isManeger();
    }

    getPhotoCandidat(image, id) {

        return "http://localhost:8080/getPhotoEtudiant/" + image + "/" + id;
    }

    notification(v) {
        if (v == true) {
            this.toastr.info('Il n\' y a pas de notification ', null, {enableHTML: true});
        }
    }

    getMessage(msg) {
        if (msg.length > 35) {
            return msg.substring(0, 34) + "..."
        }
        else {
            return msg;
        }
    }

    receiveMessage() {

        this.messaging.onMessage((payload) => {
           // console.log("Message receivedjhjkhgdjdhjkhdkhdjkhjdkh. ", payload);


            this.toastr.info('vous avez  nouveau notification ', null, {enableHTML: true});
            this.currentMessage.next(payload)


        });


    }
}