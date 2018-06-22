import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ToastsManager} from "ng2-toastr";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss']
})
export class ActivationComponent implements OnInit {

activeForm={
    password:'',
    repassword:'',
    token:''
}
    constructor(private activeRoute:ActivatedRoute,private auth:AuthService,vcr: ViewContainerRef,public toastr: ToastsManager) {
        this.activeForm.token =this.activeRoute.snapshot.params['token'];
        this.toastr.setRootViewContainerRef(vcr);

    }

  ngOnInit() {
  }
  activation(form){
      this.activeForm.password=form.value.password;
      this.activeForm.repassword=form.value.repassword;
      this.auth.activation(this.activeForm).subscribe(resp=>{
          this.toastr.success('Activation compte avec succès', 'Succès!');
      },err => {


          if(err.error.message==="token n\'existe pas") {

              this.toastr.error(err.error.message + "!", 'Erreur!');
          }
          else{
              this.toastr.error(err.error.message+'!', 'Erreur!');

          }
      });

  }

}
