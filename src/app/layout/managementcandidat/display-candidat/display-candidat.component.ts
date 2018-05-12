import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {CandidatService} from "../../../services/candidat.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-display-candidat',
  templateUrl: './display-candidat.component.html',
  styleUrls: ['./display-candidat.component.scss'],
  animations: [routerTransition()]
})
export class DisplayCandidatComponent implements OnInit {
  data:any;
  totalPages:number;
  size:number=5;
  page=0;
  pages:Array<number>;
  numberpage:number;
  totalpage:number;
  title="";
  tabTitles:any;
  firstname="";
  lastname="";
profile:any;
    candidate={id:'',photo:''}
    selectedFiles: FileList;
    ext:string="";
  constructor(private candidatservice: CandidatService,private router:Router,private auth:AuthService) { }

  ngOnInit() {
    this.chercher();
    this.getTitles();
  //  if(this.auth.isUrh()===false){
   //   this.router.navigate(['access-denied']);
  //  }

this.getProfile();
  }
  getProfile(){
      this.auth.getProfile().subscribe(resp => {
          this.profile = resp;

      }, err => {

      });
  }
  getTitles(){
    this.candidatservice.getTitles().subscribe(data => {
      this.tabTitles=data;
    });
  }
  chercher(){
    this.candidatservice.getCandidats(this.firstname,this.lastname,this.title,this.page,this.size).subscribe(data => {
      this.data=data;
      console.log(data);
      this.pages=new Array(data.totalPages);
      this.totalPages=data.totalElements;
      this.numberpage=this.page*this.size+data.numberOfElements;
      this.totalpage=data.totalPages;

    });

  }
  suivant(){

    if(this.page<this.totalpage-1 )
      this.page++
    else
      this.page=0

    this.chercher();

  }
  precedent(){

    if(this.page>0 )
      this.page--
    else {


        this.page=this.totalpage-1;
    }
    this.chercher();

  }

  goto(i:number){
    this.page=i;
    this.chercher();

  }

  getCv(cv,idCandidat){

   return "http://localhost:8080/files/"+cv+"/"+idCandidat+"/"+this.profile.companyName;
  }
  detailscontact(id){
    this.router.navigate(['detailscandidat',id]);
  }
    deleteCandidat(id){
        Swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.candidatservice.deleteCandidat(id).subscribe(
                    resp=>{
                        Swal(
                            'Deleted!',
                            'Your imaginary file has been deleted.',
                            'success'
                        )
                        this.chercher();

                    }
                )



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
    selectFile(event) {
        this.selectedFiles = event.target.files;


        this.ext=this.selectedFiles.item(0).name.split('.').pop();

    }
    updatePhoto(){
        let photo:string;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        text=text+"."+this.ext;
        photo = text;

        this.candidate.photo=photo;
        Swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {




                    this.candidatservice.uploadPhotoCandidate(this.selectedFiles.item(0),text,this.candidate.id).subscribe(event => {


                        this.chercher();

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
    getPhotoCandidate(photo,id){

        return "http://localhost:8080/getPhotoCandidate/"+photo+"/"+this.profile.companyName+"/"+id;
    }

}

