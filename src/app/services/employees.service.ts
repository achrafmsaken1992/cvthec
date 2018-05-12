import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelper} from "angular2-jwt";
@Injectable()
export class EmployeesService {
    jwtToken = null;

    constructor(private http: HttpClient) {
    }

    loadToken() {
        this.jwtToken = localStorage.getItem('token');
    }

    getListRh() {
        if (this.jwtToken == null) this.loadToken();
        return this.http.get<any>("http://localhost:8080/getListRh", {headers: new HttpHeaders({'Authorization': this.jwtToken})});

    }

    registerRh(rh) {
        if (this.jwtToken == null) this.loadToken();
        return this.http.post('http://localhost:8080/registerRh', rh, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
    }



}
