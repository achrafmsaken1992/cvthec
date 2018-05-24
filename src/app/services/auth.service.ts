import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {JwtHelper} from "angular2-jwt";
@Injectable()
export class AuthService {
  private host:string="http://localhost:8080";
  private jwtToken=null;
  private roles:Array<any>;
  private id:any;
  constructor(private http:HttpClient) { }
  isEtudiant(){
    this.loadToken();
    for(let r of this.roles) {
      if (r.authority === 'ETUDIANT') {
        return true;
      }
    }
      return false;

  }
  isManeger(){
    this.loadToken();
    for(let r of this.roles) {
      if (r.authority === 'MANAGER') {
        return true;
      }
    }
    return false;

  }
    isAdmin(){
        this.loadToken();
        for(let r of this.roles) {
            if (r.authority === 'ADMIN') {
                return true;
            }
        }
        return false;

    }


  login(user){

    return this.http.post("http://localhost:8080/login",user,{observe:'response'});
  }
  register(user){
    return this.http.post("http://localhost:8080/register",user,{observe:'response'});
  }
  saveToken(jwt:string){
    this.jwtToken=jwt;
    localStorage.setItem('token',jwt);
    let jwthelper=new JwtHelper();

    this.roles=jwthelper.decodeToken(this.jwtToken).roles;

    this.id=jwthelper.decodeToken(this.jwtToken).id;
    console.log(jwthelper.decodeToken(this.jwtToken));
  }

  loadToken(){
    let jwthelper=new JwtHelper();
    this.jwtToken=localStorage.getItem('token');
    this.roles=jwthelper.decodeToken(this.jwtToken).roles;
  }
  logout(){
      this.jwtToken=null;
    localStorage.removeItem('token');


  }
  resetPassword(email){

    return this.http.post('http://localhost:8080/recoveryPassword',email,{observe:'response'});
  }
 recoveryPassword(forgetPasswordform){
    return this.http.post('http://localhost:8080/updateAuthentification',forgetPasswordform,{observe:'response'});
  }

  getProfile(){
  if(this.jwtToken==null) this.loadToken();
  return this.http.get('http://localhost:8080/userProfile',{headers:new HttpHeaders({'Authorization':this.jwtToken})});
}

updatePassword(fo){

  if(this.jwtToken==null) this.loadToken();
  return this.http.post('http://localhost:8080/updatePassword',fo,{headers:new HttpHeaders({'Authorization':this.jwtToken})});



}


   uploadPhoto(file: File,text:string): Observable<HttpEvent<{}>> {
       if(this.jwtToken==null) this.loadToken();
        let formdata: FormData = new FormData();

        formdata.append('file', file,text);


        const req = new HttpRequest('POST', 'http://localhost:8080/uploadPhotoProfil', formdata, {
            reportProgress: true,
            responseType: 'text',
            headers:new HttpHeaders({'Authorization':this.jwtToken})
        });

        return this.http.request(req);
    }

    activation(form){
        return this.http.post('http://localhost:8080/activationCompte',form,{observe:'response',
        });
    }
  getNotifications(user,size){
    if(this.jwtToken==null) this.loadToken();
    return this.http.get('http://localhost:8080/getNotifications?user='+user+ '&size=' + size,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
}


    updateNotification(notification,id){
        if(this.jwtToken==null) this.loadToken();

        return this.http.post('http://localhost:8080/updateTokenNotification?notification=' + notification+ '&id=' + id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    }
}
