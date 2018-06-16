import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {routerTransition} from "../../router.animations";
import Swal from 'sweetalert2';
import {JwtHelper} from "angular2-jwt";
import {CandidatService} from "../../services/candidat.service";
import {ActivatedRoute, Router} from '@angular/router';
import {EtudiantService} from '../../services/etudiant.service';
import {ToastsManager} from 'ng2-toastr';
declare var jQuery:any;
@Component({
  selector: 'app-profile-urh',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [routerTransition()]
})
export class ProfileUrhComponent implements OnInit {
    profile: any;
    selectedFiles: FileList;
    selectedFilesCv: FileList;
    ext:string="";
extCv:string="";
    constructor(private auth: AuthService,private candidatService: CandidatService,private r:Router,
                private etudiantService:EtudiantService,private route: ActivatedRoute,
        public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
        if(this.auth.isEtudiant()==false)
        {
            this.r.navigate(['access-denied']);
        }


    }

    ngOnInit() {
     this.getProfile();


    }
    getProfile(){
        this.candidatService.getCandidat().subscribe(resp => {
            this.profile=resp;

        }, err => {

        });
    }
    selectFile(event) {
        this.selectedFiles = event.target.files;


        this.ext=this.selectedFiles.item(0).name.split('.').pop();

    }
    selectFileCv(event) {
        this.selectedFilesCv = event.target.files;


        this.extCv=this.selectedFilesCv.item(0).name.split('.').pop();

    }
    updatePhoto() {
        let photo:string;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        text=text+"."+this.ext;
       photo = text;

        Swal({
            title: 'Etes vous sur?',

            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, je confirme!',
            cancelButtonText: 'Non, j\'annule'
        }).then((result) => {
            if (result.value) {

                this.candidatService.uploadImageCandidat(this.selectedFiles.item(0),text).subscribe(event => {


                    this.getProfile()
                    Swal(
                        'Upload!',
                        'Upload image avec succés.',
                        'success'
                    )
                },err=>{

                });

            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal(
                    'Annulée',
                    'Upload image annulé ',
                    'error'
                )

            }
        })





}

    updateCv() {
let v:number=0;
        let cv:string;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        text=text+"."+this.extCv;
        cv = text;

        Swal({
            title: 'Etes vous sur?',

            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, je confirme!',
            cancelButtonText: 'Non, j\'annule'
        }).then((result) => {
            if (result.value) {

                this.etudiantService.uploadCv(this.selectedFilesCv.item(0),text).subscribe(event => {


                   v=1;


                },err=>{

                });
                if(v===1){
                    this.toastr.info('Upload cv avec succés', 'Upload!');
                    v=0
                }

            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal(
                    'Annulée',
                    'Upload cv annulé ',
                    'error'
                )

            }
        })




    }


    getPhotoProfil(){

        return "http://localhost:8080/getPhotoEtudiant/"+this.profile.image+"/"+this.profile.id;
    }
    downloadCv(){

        return "http://localhost:8080/getCvEtudiant/"+this.profile.cv+"/"+this.profile.id;
    }





}
