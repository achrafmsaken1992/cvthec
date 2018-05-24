import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {CandidatService} from "./services/candidat.service";
import {EmployeesService} from "./services/employees.service";
import {CollaborateurService} from "./services/collaborateur.service";
import {ToastModule} from "ng2-toastr";
import {ManagersService} from "./services/managers.service";
import {EtudiantService} from "./services/etudiant.service";
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import {QuizService} from "./services/quiz.service";
import {MessagingService} from "./services/messaging-service.service";
import {AngularFireModule, FirebaseApp} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import { AngularFirestoreModule} from "angularfire2/firestore";


const config = {
    apiKey: "AIzaSyAtiHSdmnsxIDQ67V1eVua9AcAqGnmA7Wg",
    authDomain: "pfecv-9f6f8.firebaseapp.com",
    databaseURL: "https://pfecv-9f6f8.firebaseio.com",
    projectId: "pfecv-9f6f8",
    storageBucket: "pfecv-9f6f8.appspot.com",
    messagingSenderId: "47874298368"
};





// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [

        DateValueAccessorModule,
        ToastModule.forRoot(),
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(config),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFirestoreModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, AuthService,MessagingService,CandidatService,CollaborateurService,EmployeesService,ManagersService,EtudiantService,QuizService],
    bootstrap: [AppComponent]
})
export class AppModule {}
