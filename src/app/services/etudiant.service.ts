import { Injectable } from '@angular/core';

import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
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
    getEtudiantById(id){
        if(this.jwtToken==null) this.loadToken();
        return    this.http.get<any>("http://localhost:8080/getEtudiantById?id="+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

    }
    rechEtudiants(nom: string , pren: string , langue: string,competance: string,experience: string,formation: string,page: number,size: number){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<any>("http://localhost:8080/rechEtudiants?nom="+nom
        +"&prenom="+pren
        +"&langue="+langue+"&competance="+competance+"&experience="+experience+"&formation="+formation
       +"&size="+size+"&page="+page,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

}
    uploadCv(file: File,text:string): Observable<HttpEvent<{}>> {
        if(this.jwtToken==null) this.loadToken();
        let formdata: FormData = new FormData();

        formdata.append('file', file,text);


        const req = new HttpRequest('POST', 'http://localhost:8080/etudiant/uploadCv', formdata, {
            reportProgress: true,
            responseType: 'text',
            headers:new HttpHeaders({'Authorization':this.jwtToken})
        });

        return this.http.request(req);
    }
}
