import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {updateAuthRoutingModule } from './update-auth-routing.module';
import { UpdateAuthComponent } from './update-auth.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    updateAuthRoutingModule,
    FormsModule
  ],
  declarations: [UpdateAuthComponent]
})
export class updateAuthModule { }
