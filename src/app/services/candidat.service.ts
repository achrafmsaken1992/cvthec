import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {JwtHelper} from "angular2-jwt";
@Injectable()
export class CandidatService {
  jwtToken=null;
  constructor(private http:HttpClient) { }

  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }
  getCandidat(){
    if(this.jwtToken==null) this.loadToken();
    return    this.http.get<any>("http://localhost:8080/userProfile",{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

  }

    deleteExperience(id){


        if(this.jwtToken==null) this.loadToken();
        return this.http.post('http://localhost:8080/etudiant/deleteExperience',id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});


    }

    saveExperience(experience){


        if(this.jwtToken==null) this.loadToken();
        return this.http.post('http://localhost:8080/etudiant/addExperience',experience,{headers:new HttpHeaders({'Authorization':this.jwtToken})});


    }
    updateExperience(experience){


        if(this.jwtToken==null) this.loadToken();
        return this.http.post('http://localhost:8080/etudiant/updateExperience',experience,{headers:new HttpHeaders({'Authorization':this.jwtToken})});


    }


    deleteCompetance(id){


        if(this.jwtToken==null) this.loadToken();
        return this.http.post('http://localhost:8080/etudiant/deleteCompetance',id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});


    }


    deleteLangue(id){


        if(this.jwtToken==null) this.loadToken();
        return this.http.post('http://localhost:8080/etudiant/deleteLangue',id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});


    }
    deleteFormation(id){


        if(this.jwtToken==null) this.loadToken();
        return this.http.post('http://localhost:8080/etudiant/deleteFormation',id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});


    }

    saveLangue(langue){


        if(this.jwtToken==null) this.loadToken();
        return this.http.post('http://localhost:8080/etudiant/addLangue',langue,{headers:new HttpHeaders({'Authorization':this.jwtToken})});


    }

    saveCompetance(competance){


        if(this.jwtToken==null) this.loadToken();
        return this.http.post('http://localhost:8080/etudiant/addCompetance',competance,{headers:new HttpHeaders({'Authorization':this.jwtToken})});


    }

    saveFormation(formation){


        if(this.jwtToken==null) this.loadToken();
        return this.http.post('http://localhost:8080/etudiant/addFormation',formation,{headers:new HttpHeaders({'Authorization':this.jwtToken})});


    }


    updateLangue(langue){


        if(this.jwtToken==null) this.loadToken();
        return this.http.post('http://localhost:8080/etudiant/updateLangue',langue,{headers:new HttpHeaders({'Authorization':this.jwtToken})});


    }



    updateCompetance(competance){


        if(this.jwtToken==null) this.loadToken();
        return this.http.post('http://localhost:8080/etudiant/updateCompetance',competance,{headers:new HttpHeaders({'Authorization':this.jwtToken})});


    }






    updateFormation(formation){


        if(this.jwtToken==null) this.loadToken();
        return this.http.post('http://localhost:8080/etudiant/updateFormation',formation,{headers:new HttpHeaders({'Authorization':this.jwtToken})});


    }
















    getCandidatByid(id:number){

        if(this.jwtToken==null) this.loadToken();
        return    this.http.get<any>("http://localhost:8080/getCandidatByid?id="+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})} )


    }
    deleteCandidat(id){
        if(this.jwtToken==null) this.loadToken();
        return this.http.post('http://localhost:8080/deleteCandidate',id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    }
    addMessage(message){
        if(this.jwtToken==null) this.loadToken();
        return this.http.post('http://localhost:8080/addMessage',message,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    }
    updateResume(resume){
        if(this.jwtToken==null) this.loadToken();
        return this.http.get('http://localhost:8080/etudiant/updateResume?resume='+resume,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    }

    register(user){


        if(this.jwtToken==null) this.loadToken();
        return this.http.post('http://localhost:8080/registercandidat',user,{headers:new HttpHeaders({'Authorization':this.jwtToken})});


    }

    pushFileToStorage(file: File,text:string,id): Observable<HttpEvent<{}>> {
        let formdata: FormData = new FormData();

        formdata.append('file', file,text);


        const req = new HttpRequest('POST', 'http://localhost:8080/registerCvcandidat?id='+id, formdata, {
            reportProgress: true,
            responseType: 'text',
            headers:new HttpHeaders({'Authorization':this.jwtToken})
        });

        return this.http.request(req);
    }




    uploadImageCandidat(file: File,text:string): Observable<HttpEvent<{}>> {
        let formdata: FormData = new FormData();

        formdata.append('file', file, text);


        const req = new HttpRequest('POST', 'http://localhost:8080/etudiant/uploadImage', formdata, {
            reportProgress: true,
            responseType: 'text',
            headers: new HttpHeaders({'Authorization': this.jwtToken})
        });
        return this.http.request(req);
    }
    getManagers(mot:string) {
        if (this.jwtToken == null) this.loadToken();
        return this.http.get<any>("http://localhost:8080/etudiant/getManagers?mot=" + mot   , {headers: new HttpHeaders({'Authorization': this.jwtToken})});

    }
    getTitreCompetances() {
        if (this.jwtToken == null) this.loadToken();
        return this.http.get<string>("http://localhost:8080/getTitreCompetances"  , {headers: new HttpHeaders({'Authorization': this.jwtToken})});

    }

























    getTitles(){


        if(this.jwtToken==null) this.loadToken();
        return this.http.get('http://localhost:8080/getTitles',{headers:new HttpHeaders({'Authorization':this.jwtToken})});


    }



    uploadPhotoCandidate(file: File,text:string,id): Observable<HttpEvent<{}>> {
        if(this.jwtToken==null) this.loadToken();
        let formdata: FormData = new FormData();

        formdata.append('file', file,text);


        const req = new HttpRequest('POST', 'http://localhost:8080/uploadPhotoCandidat?id='+id , formdata, {
            reportProgress: true,
            responseType: 'text',
            headers:new HttpHeaders({'Authorization':this.jwtToken})
        });

        return this.http.request(req);
    }
    getCandidats(firstname:string,lastname:string,title:string,page:number,size:number){
        if(this.jwtToken==null) this.loadToken();
        return    this.http.get<any>("http://localhost:8080/getCandidats?firstname="+firstname+"&lastname="+lastname+"&title="+title+"&size="+size+"&page="+page,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );

    }
    getMessageries(id1,id2){
        return    this.http.get<any>("http://localhost:8080/getMessageries?user1="+id1+"&user2="+id2,{headers:new HttpHeaders({'Authorization':this.jwtToken})} );
    }

    getOffers(mot: string, page: number, size: number) {
        if (this.jwtToken == null) this.loadToken();
        return this.http.get<any>("http://localhost:8080/etudiant/getAllOffres?mot=" + mot   + "&size=" + size+ "&page=" + page, {headers: new HttpHeaders({'Authorization': this.jwtToken})});

    }



}
