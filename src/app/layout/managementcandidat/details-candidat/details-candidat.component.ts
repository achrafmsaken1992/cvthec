import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { Router,ActivatedRoute, Params} from '@angular/router';

import {CandidatService} from "../../../services/candidat.service";
import {routerTransition} from "../../../router.animations";
import {Location} from '@angular/common';
import Swal from 'sweetalert2';
import {AuthService} from "../../../services/auth.service";
import {ToastsManager} from 'ng2-toastr';
declare var jQuery:any;
@Component({
  selector: 'app-details-candidat',
  templateUrl: './details-candidat.component.html',
  styleUrls: ['./details-candidat.component.scss'],
  animations: [routerTransition()]
})
export class DetailsCandidatComponent implements OnInit {
candidat:string;
  constructor(private activeRoute:ActivatedRoute,private router:Router,private auth:AuthService,
              private candidatservice: CandidatService,private _location: Location, public toastr: ToastsManager, vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
      if(this.auth.isEtudiant()==false)
      {
          this.router.navigate(['access-denied'])
      }

  }

  ngOnInit() {
this.getCandidat();

}

getCandidat(){
    this.candidatservice.getCandidat().subscribe(resp=>{
        this.candidat=resp;
    },err=>{
        console.log("err")
    })
}
    deleteExperience(id:number){



        Swal({
            title: 'Etes vous sur?',

            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, je confirme!',
            cancelButtonText: 'Non, j\'annule'
        }).then((result) => {
            if (result.value) {
                this.candidatservice.deleteExperience(id).subscribe(data => {
                    this.getCandidat();
                    Swal(
                        'Suppression!',
                        'Suppression experience avec succée.',
                        'success'
                    )

                }, err => {




                })





                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal(
                    'Annulée',
                    'Suppression experience annulée',
                    'error'
                )
            }
        })

    }


    deleteCompetance(id:number){



        Swal({
            title: 'Etes vous sur?',

            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, je confirme!',
            cancelButtonText: 'Non, j\'annule'
        }).then((result) => {
            if (result.value) {
                this.candidatservice.deleteCompetance(id).subscribe(data => {
                    this.getCandidat();
                    Swal(
                        'Suppression!',
                        'Suppression competance avec succée.',
                        'success'
                    )

                }, err => {




                })





                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal(
                    'Annulée',
                    'Suppression experience annulée',
                    'error'
                )
            }
        })

    }



    deleteFormation(id:number){



        Swal({
            title: 'Etes vous sur?',

            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, je confirme!',
            cancelButtonText: 'Non, j\'annule'
        }).then((result) => {
            if (result.value) {
                this.candidatservice.deleteFormation(id).subscribe(data => {

                    Swal(
                        'Suppression!',
                        'Suppression formation avec succée.',
                        'success'
                    )
                    this.getCandidat();
                }, err => {




                })





                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal(
                    'Annulée',
                    'Suppression formation annulée',
                    'error'
                )
            }
        })

    }



    deleteLangue(id:number){



        Swal({
            title: 'Etes vous sur?',

            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, je confirme!',
            cancelButtonText: 'Non, j\'annule'
        }).then((result) => {
            if (result.value) {
                this.candidatservice.deleteLangue(id).subscribe(data => {
                    this.getCandidat();
                    Swal(
                        'Suppression!',
                        'Suppression langue avec succés.',
                        'success'
                    )

                }, err => {




                })





                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal(
                    'Annulée',
                    'Suppression langue annulée',
                    'error'
                )
            }
        })

    }
    getPhotoCandidate(photo,id){

        return "http://localhost:8080/getPhotoEtudiant/"+photo+"/"+id;
    }
    updateResume(fo){
        if(fo.valid){
            this.candidatservice.updateResume(fo.value.resume).subscribe(resp=>{

                this.getCandidat();



                jQuery(".modal").hide();
                Swal(
                    'mise à jour!',
                    'mise à jour résumé avec succée.',
                    'success'
                )
            })

        }




    }
    close(){
        jQuery(".modal").hide();
    }
open(){
    jQuery(".modal").show();


}
    }



