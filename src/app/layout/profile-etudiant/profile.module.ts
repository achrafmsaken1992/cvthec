import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { urhRoutingModule } from './profile-routing.module';
import { ProfileUrhComponent } from './profile.component';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../shared/modules/page-header/page-header.module";
import { UpdatePasswordRhComponent } from './update-password/update-password.component';
import {CustomMaterialModule} from "../../material/material.module";

@NgModule({
    imports: [CommonModule, urhRoutingModule, PageHeaderModule,FormsModule, CustomMaterialModule],
    declarations: [ProfileUrhComponent, UpdatePasswordRhComponent],

})
export class ProfileUrhModule {}
