import { Component, OnInit } from '@angular/core';
import {ManagersService} from "../../../services/managers.service";
import swal from 'sweetalert2';
import {AuthService} from "../../../services/auth.service";
declare var jQuery:any;
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
    selectedFiles: FileList;
    ext:string;
    data:any;
    totalPages:number;
    size:number=4;
    page=0;
    pages:Array<number>;
    numberpage:number;
    mot:string="";



    totalpage:number;
    active=1;
manager:any;




  constructor(private managersService:ManagersService,private authService:AuthService) {

  }

  ngOnInit() {
      this.profileManager();
      this.chercher();

  }

  profileManager(){
      this.authService.getProfile().subscribe(resp=>{
this.manager=resp;
      },
          err=>{
          console.log(err);
      })
  }
    selectFile(event) {
        this.selectedFiles = event.target.files;

        console.log(this.selectedFiles.item(0).name.split('.').pop());
        this.ext=this.selectedFiles.item(0).name.split('.').pop();
        console.log(this.selectedFiles.item(0).size);
    }
    chercher(){
        this.managersService.getOffers(this.mot,this.active,this.page,this.size).subscribe(data => {
            this.data = data;
            console.log(data);
            this.pages = new Array(data.totalPages);
            this.totalPages = data.totalElements;
            this.numberpage = this.page * this.size + data.numberOfElements;
            this.totalpage = data.totalPages;
        },err=>{
            console.log("erreur")
        });
    }
    getPhotoOffre(photo,id){

        return "http://localhost:8080/getPhotoOffreByManager/"+photo+"/"+id+"/"+this.manager.nomEntreprise;
    }

    register(form) {



        if (!form.valid) {

            swal('Oops...','vous devez remplir convenablement les champs'+ '!', 'error');

        }

        else {

            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            if(this.selectedFiles.item(0).size>4999999)
            {
                swal('Oops...','taille maximum de fichier 500ko'+ '!', 'error');
            }
            else {
                text=text+"."+this.ext;
                form.value.image = text;

                swal({
                    title: 'Etes vous sur?',
                    text: '',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Oui, je confirme!',
                    cancelButtonText: `Non, j'annule`
                }).then((result) => {
                    if (result.value) {
console.log(form.value)
                        this.managersService.addOffre(form.value).subscribe(resp => {

                            console.log(text);
                            this.managersService.addImageOffre(this.selectedFiles.item(0),text,resp).subscribe(event => {
                                swal(
                                    'Ajouté!',
                                    'ajout offre avec succés',
                                    'success'
                                )
                                form.reset();
                                this.chercher();
                            });

                        }, err => {
                            console.log("erreur");


                        });



                        // For more information about handling dismissals please visit
                        // https://sweetalert2.github.io/#handling-dismissals
                    } else if (result.dismiss === swal.DismissReason.cancel) {
                        swal(
                            'Annuler',
                            'ajout offre annulé :)',
                            'error'
                        )
                    }
                })








            }
        }
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


    updateImageOffre(id:number) {
        let photo: string;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        text = text + "." + this.ext;
        photo = text;

        swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {


                    this.managersService.addImageOffre(this.selectedFiles.item(0), text, id).subscribe(event => {
                        swal(
                            'Modifier!',
                            'modifier image offre avec succés',
                            'success'
                        )
this.chercher();
                    });



            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )

            }
        })





    }
    supprimer(id) {
        swal({
            title: 'Etes vous sur?',
            text: '',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, je confirme!',
            cancelButtonText: `Non, j'annule`
        }).then((result) => {
            if (result.value) {

                this.managersService.deleteOffre(id).subscribe(resp => {

                    swal(
                        'Supprimé!',
                        'supprimer offre avec succés',
                        'success'
                    )
this.page=0;

                    this.chercher();

                })


                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal(
                    'Annuler',
                    'suppression offre annulé :)',
                    'error'
                )

            }
        })


    }
    modal(id) {

        jQuery("#offre" + id).modal()


    }
    close() {
        jQuery(".dropdown-toggle").hide();
    }

    open() {
        jQuery(".dropdown-toggle").show();
    }



    update(form, id) {
        if (form.valid) {
            form.value.id = id;
            if ((form.value.duree < 20)) {
                swal(
                    'Echoué!',
                    'durrée minimum 20 seconde',
                    'error'
                )
            }
            else if ((form.value.duree > 80)) {
                swal(
                    'Echoué!',
                    'durrée maximum 80 seconde',
                    'error'
                )
            }

            else if (!form.valid) {

                swal('Oops...', 'vous devez remplir convenablement les champs' + '!', 'error');


            }

            else {


                form.value.offre = id;

                swal({
                    title: 'Etes vous sur?',
                    text: '',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Oui, je confirme!',
                    cancelButtonText: `Non, j'annule`
                }).then((result) => {
                    if (result.value) {

                        this.managersService.updateOffre(form.value).subscribe(resp => {
                            swal(
                                'modification!',
                                'modification quiz avec succés',
                                'success'
                            )
                            jQuery("div").removeClass("modal-backdrop");
                            jQuery("body").removeClass("modal-open ");
                            form.reset();
                            this.chercher();

                        })
                    }
                })
            }
        }
    }

}
