import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule} from './contact-routing.module';
import { ContactComponent } from './contact.component';
import {FormsModule} from "@angular/forms";
import { AgmCoreModule} from '@agm/core'
//AIzaSyBcjjMJg4YalGegA9uHjw6HSjrqZ1k7cPE
//
@NgModule({
  imports: [
      AgmCoreModule.forRoot({
          apiKey:'AIzaSyBcjjMJg4YalGegA9uHjw6HSjrqZ1k7cPE'
      }),
    CommonModule,
      ContactRoutingModule,
    FormsModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
