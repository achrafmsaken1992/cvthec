import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {routerTransition} from "../../router.animations";

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.scss'],
    animations: [routerTransition()]
})
export class ReceptionComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
