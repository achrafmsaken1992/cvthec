import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {routerTransition} from "../../router.animations";
import Swal from 'sweetalert2';
import {JwtHelper} from "angular2-jwt";
import {CandidatService} from "../../services/candidat.service";
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
    ext:string="";

    constructor(private auth: AuthService,private candidatService: CandidatService) {
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
    updatePhoto() {
        let photo:string;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        text=text+"."+this.ext;
       photo = text;

        Swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {

                this.candidatService.uploadImageCandidat(this.selectedFiles.item(0),text).subscribe(event => {


                    this.getProfile()

                },err=>{

                });

            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )

            }
        })





}



    getPhotoProfil(){

        return "http://localhost:8080/getPhotoEtudiant/"+this.profile.image+"/"+this.profile.id;
    }






}
