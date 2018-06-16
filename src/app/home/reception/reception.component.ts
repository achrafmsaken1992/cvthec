import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Router} from "@angular/router";



@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.scss'],

})
export class ReceptionComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
