import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class EtudiantService {
    jwtToken:string;
  constructor(private http: HttpClient) { }
    loadToken() {
        this.jwtToken = localStorage.getItem('token');
    }
    getEtudiants(nom:string,prenom:string,active:number,valide:number,page:number,size:number){
        if(this.jwtToken==null) this.loadToken();
        return    this.http.get<any>("http://localhost:8080/admin/getEtudiants?nom="+nom+"&prenom="+prenom+"&active="+active+"&valide="+valide+"&size="+size+"&page="+page,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

    }
    register(user){
        return this.http.post("http://localhost:8080/admin/ajoutEtudiant",user,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    }

}
