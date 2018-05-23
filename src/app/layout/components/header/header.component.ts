import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {AuthService} from "../../../services/auth.service";
import {ToastsManager} from "ng2-toastr";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';
data:any;
size=5;
profile:any;
    totalpage:number;
    constructor(private translate: TranslateService, public router: Router,private auth:AuthService ,public toastr: ToastsManager, vcr: ViewContainerRef) {

    this.toastr.setRootViewContainerRef(vcr)

        this.auth.getProfile().subscribe(resp => {
            this.profile = resp;
            this.getNotifications(this.profile.id,this.size);
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
    getNotifications(id,size){

        this.auth.getNotifications(id,size).subscribe(resp=>{
            this.data=resp;


            console.log(this.data);

        })

    }
    change(){
        this.size=this.size+5;
        this.getNotifications(this.profile.id,this.size);
    }
    getPhotoManager(image,id){

        return "http://localhost:8080/getPhotoManager/"+image+"/"+id;
    }
    isEtudiant(){
        return this.auth.isEtudiant();
    }
    isManager(){
        return this.auth.isManeger();
    }
    getPhotoCandidat(image,id){

        return "http://localhost:8080/getPhotoEtudiant/"+image+"/"+id;
    }
    notification(v) {
       if( v==true)
       {
           this.toastr.info(`il n\`y a pas de notification `  );
       }
    }
    getMessage(msg){
        if(msg.length>35){
            return msg.substring(0,34)+"..."
        }
        else{
            return msg;
        }
    }

}
