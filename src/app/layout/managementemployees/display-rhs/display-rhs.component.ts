import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {EmployeesService} from "../../../services/employees.service";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-display-rhs',
  templateUrl: './display-rhs.component.html',
  styleUrls: ['./display-rhs.component.scss'],
  animations: [routerTransition()]
})
export class DisplayRhsComponent implements OnInit {
rhs:any;
  constructor(private serviceEmployee:EmployeesService,private auth:AuthService,private router:Router) { }

  ngOnInit() {
this.listRh();

  }
  listRh(){
    this.serviceEmployee.getListRh().subscribe(resp=>{
      this.rhs=resp;
    },err=>{
      console.log("erreur");
    });
  }
  isManager(){
    if(this.auth.isEtudiant()===false){
      this.router.navigate(['access-denied']);
    }


  }
    getPhotoProfil(photo,id,companyName){

        return "http://localhost:8080/getPhotoProfile/"+photo+"/"+companyName+"/"+id
    }

}
