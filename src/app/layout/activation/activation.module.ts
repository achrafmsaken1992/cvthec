import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ActivationRoutingModule } from './activation-routing.module';
import { ActivationComponent } from './activation.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
      ActivationRoutingModule,
    FormsModule
  ],
  declarations: [ActivationComponent]
})
export class ActivationModule { }
