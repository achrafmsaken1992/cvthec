import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {routerTransition} from "../../router.animations";

@Component({
  selector: 'app-reception',
  templateUrl: './contact.component.html',
  styleUrls: ['../reception/reception.component.scss'],
    animations: [routerTransition()]
})

export class ContactComponent implements OnInit {
lat :number=35.850658;

    lng :number=10.595464;
  constructor(public router: Router) { }

  ngOnInit() {
  }

}
