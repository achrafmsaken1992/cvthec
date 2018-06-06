import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params} from '@angular/router';

import {CandidatService} from "../../../services/candidat.service";
import {routerTransition} from "../../../router.animations";
import {Location} from '@angular/common';
import Swal from 'sweetalert2';
import {AuthService} from "../../../services/auth.service";
declare var jQuery:any;
@Component({
  selector: 'app-details-candidat',
  templateUrl: './details-candidat.component.html',
  styleUrls: ['./details-candidat.component.scss'],
  animations: [routerTransition()]
})
export class DetailsCandidatComponent implements OnInit {
candidat:string;
  constructor(private activeRoute:ActivatedRoute,private router:Router,private auth:AuthService,private candidatservice: CandidatService,private _location: Location) {


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
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.candidatservice.deleteExperience(id).subscribe(data => {
                    this.getCandidat();
                    Swal(
                        'Deleted!',
                        'Your imaginary file has been deleted.',
                        'success'
                    )

                }, err => {




                })





                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })

    }


    deleteCompetance(id:number){



        Swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.candidatservice.deleteCompetance(id).subscribe(data => {
                    this.getCandidat();
                    Swal(
                        'Deleted!',
                        'Your imaginary file has been deleted.',
                        'success'
                    )

                }, err => {




                })





                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })

    }



    deleteFormation(id:number){



        Swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.candidatservice.deleteFormation(id).subscribe(data => {

                    Swal(
                        'Deleted!',
                        'Your imaginary file has been deleted.',
                        'success'
                    )
                    this.getCandidat();
                }, err => {




                })





                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })

    }



    deleteLangue(id:number){



        Swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.candidatservice.deleteLangue(id).subscribe(data => {
                    this.getCandidat();
                    Swal(
                        'Deleted!',
                        'Your imaginary file has been deleted.',
                        'success'
                    )

                }, err => {




                })





                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal(
                    'Cancelled',
                    'Your imaginary file is safe :)',
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
            })

        }




    }
open(){
    jQuery(".modal").show();


}
    }



