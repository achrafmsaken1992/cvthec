import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../services/employees.service";
import {observable} from "rxjs/symbol/observable";
import { Observable } from "rxjs/Observable"
import {ManagersService} from "../../services/managers.service";

@Component({
  selector: 'app-management-manager',
  templateUrl: './management-manager.component.html',
  styleUrls: ['./management-manager.component.scss']
})
export class ManagementManagerComponent implements OnInit {
    data:any;
    totalPages:number;
    size:number=5;
    page=0;
    pages:Array<number>;
    numberpage:number;
query:string;
rech="prenom";
prenom=""
nom="";
societe="";
    totalpage:number;
active=1;
valide=0;
date=""
  constructor(private managerService:ManagersService) {
      this.chercher();
  }

  ngOnInit() {
      this.chercher();


      }

search(){



      if(this.rech=="prenom"){
          this.prenom=this.query;
          this.nom="";
          this.societe="";

      }
      else if(this.rech=="nom"){
          this.prenom="";
          this.nom=this.query;
          this.societe="";

      }
      else {
          this.prenom="";
          this.nom="";
          this.societe=this.query;

      }
this.chercher();

}

    chercher(){
        this.managerService.getManagers(this.nom,this.prenom,this.societe,this.active,this.valide,this.page,this.size).subscribe(data => {
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

}
