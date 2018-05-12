import { Component, OnInit } from '@angular/core';
import {CandidatService} from "../../../services/candidat.service";

import {AuthService} from "../../../services/auth.service";
import swal from 'sweetalert2';
import {routerTransition} from "../../../router.animations";

import {Router} from "@angular/router";
@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.scss'],
  animations: [routerTransition()]
})
export class AddCandidatComponent implements OnInit {
  selectedFiles: FileList
ext:string;
  cand={
    email:"",
    adresse:"",
    firstname:"",
    lastname:"",
    tel:"",
   title:"",
    cv:""
  }
  constructor(private candidatservice: CandidatService,private auth:AuthService,private router:Router) {
  }

  ngOnInit() {
    if(this.auth.isEtudiant()===false){
      this.router.navigate(['access-denied']);
    }
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;

    console.log(this.selectedFiles.item(0).name.split('.').pop());
    this.ext=this.selectedFiles.item(0).name.split('.').pop();
    console.log(this.selectedFiles.item(0).size);
  }

  register(form) {
   // let id;


    if (!form.valid) {

      swal('Oops...','vous devez remplir convenablement les champs'+ '!', 'error');

    }

    else {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      if (this.ext !== "pdf") {
        swal('Oops...',`extension non valide,l'extension de la fichier doit etre pdf ou docs `+ ' !', 'error');}
      else if(this.selectedFiles.item(0).size>49999999)
        {
          swal('Oops...','taille maximum de fichier 50Mo'+ '!', 'error');
        }
       else {
        text=text+"."+this.ext;
        form.value.cv = text;

        swal({
          title: 'Etes vous sur?',
          text: '',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui, je confirme!',
          cancelButtonText: `Non, j'annule`
        }).then((result) => {
          if (result.value) {

            this.candidatservice.register(form.value).subscribe(resp => {

              console.log(text);
              this.candidatservice.pushFileToStorage(this.selectedFiles.item(0),text,resp).subscribe(event => {
                swal(
                    'Ajouté!',
                    'ajout condidat avec succés',
                    'success'
                )
                form.reset();

              });

            }, err => {
              swal(
                  'Erreur!',
                  'email existe deja',
                  'error'
              )


            });



            // For more information about handling dismissals please visit
            // https://sweetalert2.github.io/#handling-dismissals
          } else if (result.dismiss === swal.DismissReason.cancel) {
            swal(
                'Annuler',
                'ajout candidat annulé :)',
                'error'
            )
          }
        })








      }
    }
  }

}
