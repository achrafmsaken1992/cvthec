import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {JwtHelper} from "angular2-jwt";

@Injectable()
export class CollaborateurService {
    jwtToken=null;

    constructor(private http:HttpClient) { }

    loadToken(){
        this.jwtToken=localStorage.getItem('token');
    }
    registerCollaborateur(col) {
        if (this.jwtToken == null) this.loadToken();
        return this.http.post('http://localhost:8080/registercollaborateur', col, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
    }
    registerCvCollaborateur(file: File,text:string,id): Observable<HttpEvent<{}>> {
        let formdata: FormData = new FormData();

        formdata.append('file', file,text);


        const req = new HttpRequest('POST', 'http://localhost:8080/registerCvCollaborateur?id='+id, formdata, {
            reportProgress: true,
            responseType: 'text',
            headers:new HttpHeaders({'Authorization':this.jwtToken})
        });

        return this.http.request(req);
    }
    getCollaborateurs(firstname:string,lastname:string,title:string,page:number,size:number){
        if(this.jwtToken==null) this.loadToken();
        return    this.http.get<any>("http://localhost:8080/getCollaborateurs?firstname="+firstname+"&lastname="+lastname+"&title="+title+"&page="+page+"&size="+size,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

    }
    uploadPhotoCollaborator(file: File,text:string,id): Observable<HttpEvent<{}>> {
        if(this.jwtToken==null) this.loadToken();
        let formdata: FormData = new FormData();

        formdata.append('file', file,text);


        const req = new HttpRequest('POST', 'http://localhost:8080/uploadPhotoCollaborateur?id='+id , formdata, {
            reportProgress: true,
            responseType: 'text',
            headers:new HttpHeaders({'Authorization':this.jwtToken})
        });

        return this.http.request(req);
    }
}
