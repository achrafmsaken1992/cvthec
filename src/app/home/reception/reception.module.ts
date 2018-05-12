import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReceptionRoutingModule } from './reception-routing.module';
import { ReceptionComponent } from './reception.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReceptionRoutingModule,
    FormsModule
  ],
  declarations: [ReceptionComponent]
})
export class ReceptionModule { }
