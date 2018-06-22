import { Component, OnInit } from '@angular/core';
import {ManagersService} from "../../../services/managers.service";
import Swal from 'sweetalert2';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any;
  selectedFiles: FileList;
  selectedFilesCv: FileList;
  ext: string = "";
extCv:string="";
  constructor(private managerService: ManagersService,private r:Router,private route: ActivatedRoute,private authService:AuthService) {
    if (this.authService.isManeger() == false) {
      this.r.navigate(['access-denied'])
    }
  }

    selectFile(event) {
    this.selectedFiles = event.target.files;


    this.ext = this.selectedFiles.item(0).name.split('.').pop();

  }
  selectFileCv(event) {
    this.selectedFilesCv = event.target.files;


    this.extCv = this.selectedFilesCv.item(0).name.split('.').pop();

  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.managerService.managerProfile().subscribe(
        resp => {
          this.profile = resp;
        },
        err => {
          console.log("erreur");
        }
    )


  }

  updatePhoto() {
    let photo: string;
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    text = text + "." + this.ext;
    photo = text;

    Swal({
      title: 'Etes vous sur?',

      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, je confirme!',
      cancelButtonText: 'Non, j\'annule'
    }).then((result) => {
      if (result.value) {

        this.managerService.uploadImageManager(this.selectedFiles.item(0), text).subscribe(event => {


          this.getProfile()

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
  getPhotoProfil(){

    return "http://localhost:8080/getPhotoManager/"+this.profile.image+"/"+this.profile.nomEntreprise;
  }


}
