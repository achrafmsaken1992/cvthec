import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ManagersService {
    jwtToken: string;

    constructor(public http: HttpClient) {
    }

    loadToken() {
        this.jwtToken = localStorage.getItem('token');
    }


    getManagers(nom: string, prenom: string, nomEntreprise: string, active: number, valide: number, page: number, size: number) {
        if (this.jwtToken == null) this.loadToken();
        return this.http.get<any>("http://localhost:8080/admin/getManagers?nom=" + nom + "&prenom=" + prenom + "&nomEntreprise=" + nomEntreprise + "&active=" + active + "&valide=" + valide + "&size=" + size + "&page=" + page, {headers: new HttpHeaders({'Authorization': this.jwtToken})});

    }
    addOffre(offre){


console.log(offre);
            if(this.jwtToken==null) this.loadToken();
            return this.http.post('http://localhost:8080/manager/addOffre',offre,{headers:new HttpHeaders({'Authorization':this.jwtToken})});


        }
    addImageOffre(file: File,text:string,id): Observable<HttpEvent<{}>> {
        let formdata: FormData = new FormData();

        formdata.append('file', file,text);


        const req = new HttpRequest('POST', 'http://localhost:8080/manager/imageOffre?id='+id, formdata, {
            reportProgress: true,
            responseType: 'text',
            headers:new HttpHeaders({'Authorization':this.jwtToken})
        });

        return this.http.request(req);
    }
    getOffers(mot: string, active: number, page: number, size: number) {
        if (this.jwtToken == null) this.loadToken();
        return this.http.get<any>("http://localhost:8080/manager/getManagerOffres?mot=" + mot + "&active=" + active  + "&size=" + size+ "&page=" + page, {headers: new HttpHeaders({'Authorization': this.jwtToken})});

    }

   managerProfile(){
        if(this.jwtToken==null) this.loadToken();
        return    this.http.get<any>("http://localhost:8080/manager/userProfile",{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

    }
    uploadImageManager(file: File,text:string): Observable<HttpEvent<{}>> {
        let formdata: FormData = new FormData();

        formdata.append('file', file, text);


        const req = new HttpRequest('POST', 'http://localhost:8080/manager/uploadImage', formdata, {
            reportProgress: true,
            responseType: 'text',
            headers: new HttpHeaders({'Authorization': this.jwtToken})
        });
        return this.http.request(req);
    }
    getEtudiantMessagerie(mot){
        if (this.jwtToken == null) this.loadToken();
        return this.http.get<any>("http://localhost:8080/manager/getEtudiantsMessagerie?mot=" + mot , {headers: new HttpHeaders({'Authorization': this.jwtToken})});

    }
    getMessageries(id1,id2){
        return    this.http.get<any>("http://localhost:8080/getMessageries?user1="+id1+"&user2="+id2,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );
    }
    addMessage(message){
        if(this.jwtToken==null) this.loadToken();
        return this.http.post('http://localhost:8080/addMessage',message,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    }

}
