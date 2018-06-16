import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from '../../services/auth.service';
import {ToastsManager} from 'ng2-toastr';


@Component({
  selector: 'app-reception',
  templateUrl: './contact.component.html',
  styleUrls: ['../reception/reception.component.scss'],

})

export class ContactComponent implements OnInit {
lat :number=35.802004;

    lng :number=10.614392;
  constructor(public router: Router,public authService:AuthService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }
  register(com){
    if(com.valid) {
      this.authService.envoyerContact(com.value).subscribe(resp => {
        this.toastr.success('envoi commentaire avec succès', 'succès!');
        com.reset();
      })
    }
  }

}
