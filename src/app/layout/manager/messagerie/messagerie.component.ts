import { Component, OnInit } from '@angular/core';
import {ManagersService} from "../../../services/managers.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from '../../../services/auth.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.scss']
})
export class MessagerieComponent implements OnInit {
  profile: any;

  etudiants: any;
  etudiant: any;
  msg = "";
  a = 0;
  active = -1;
  messages: any;
  etudiantP: any;
  mot: string = "";
  param1: any;


  id: number;

  constructor(private managerService: ManagersService, private r: Router, private route: ActivatedRoute, private authService: AuthService) {
    if (this.authService.isManeger() == false) {
      this.r.navigate(['access-denied'])
    }

  }

  ngOnInit() {
    if (this.route.snapshot.params['id'] != undefined) {
      if (isNaN(this.route.snapshot.params['id']) == true) {
        this.r.navigate(['access-denied'])
      }
      this.id = parseInt(this.route.snapshot.params['id']);
      this.getProfile();
      this.getEtudiants();


    }
    else {
      this.getProfile();
      this.getEtudiants();
    }
    this.active = this.etudiant.id;

  }

  getProfile() {
    this.managerService.managerProfile().subscribe(resp => {
      this.profile = resp;
    }, err => {
      console.log(err);
    })
  }

  getEtudiants() {

    this.managerService.getEtudiantMessagerie(this.mot).subscribe(resp => {
      this.etudiants = resp;
      let existe = 0;

      for (let i = 0; i < this.etudiants.length; i++) {

        if (this.etudiants[i].id == this.id) {
          this.etudiant = this.etudiants[i];
          existe = 1;
          this.active = this.id;

        }
      }
      if (existe == 0 && !isNaN(this.route.snapshot.params['id'])) {
        this.r.navigate(['access-denied'])
      }
      else {
        this.getMessages(this.etudiant)
        this.a = 1;
      }


    }, err => {
      console.log(err)
    })

  }

  getPhotoManager(image, id) {

    return "http://localhost:8080/getPhotoManager/" + image + "/" + id;
  }

  getPhotoCandidate(photo, id) {
    return "http://localhost:8080/getPhotoEtudiant/" + photo + "/" + id;
  }

  getMessages(etudiant) {
    this.a = 1;

    this.etudiantP = etudiant;
    this.managerService.getMessageries(this.profile.id, this.etudiantP.id).subscribe(resp => {
      this.messages = resp;
    }, err => {
      console.log(err);
    })

  }

  chercher() {
    this.getEtudiants();
  }

  addMessage() {
    let photo = this.getPhotoManager(this.profile.image, this.profile.nomEntreprise);
    let message = {
      user1: this.profile.id,
      user2: this.etudiantP.id,
      role: "etudiant",
      message: this.msg,
      image: photo,
      body: this.profile.prenom + "  " + this.profile.nom + " t'\a envoyé nouveau message "
    }
    this.managerService.addMessage(message).subscribe(resp => {
          this.msg = "";

          this.getMessages(this.etudiantP);

        },
        err => {

        })


  }

  goEtudiant(etudiant) {

    this.getMessages(etudiant)
    this.active = etudiant.id;

    this.r.navigateByUrl('messagerie-manager/' + etudiant.id);

  }

  supprimer(etudiant,id) {
    swal({
      title: 'Etes vous sur?',
      text: '',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, je confirme!',
      cancelButtonText: `Non, j'annule`
    }).then((result) => {
      if (result.value) {

        this.authService.deleteMessage(id).subscribe(resp => {
          swal(
              'Supprimer!',
              'suppression message avec succés',
              'success'
          )

          this.getMessages(etudiant);
        })


        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal(
            'Annuler',
            'suppression message annulée :)',
            'error'
        )

      }
    })
  }

}