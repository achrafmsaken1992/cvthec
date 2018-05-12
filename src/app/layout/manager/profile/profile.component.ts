import { Component, OnInit } from '@angular/core';
import {ManagersService} from "../../../services/managers.service";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any;
  selectedFiles: FileList;
  ext: string = "";

  constructor(private managerService: ManagersService) {


  }

  selectFile(event) {
    this.selectedFiles = event.target.files;


    this.ext = this.selectedFiles.item(0).name.split('.').pop();

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
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.managerService.uploadImageManager(this.selectedFiles.item(0), text).subscribe(event => {


          this.getProfile()

        }, err => {

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

    return "http://localhost:8080/getPhotoManager/"+this.profile.image+"/"+this.profile.nomEntreprise;
  }


}
