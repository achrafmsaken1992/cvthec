import { Component, OnInit } from '@angular/core';
import {MessagingService} from "./services/messaging-service.service";


import { tap } from 'rxjs/operators';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private msgService: MessagingService) {
    }

    ngOnInit() {

    }

}
