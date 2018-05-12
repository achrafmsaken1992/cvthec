import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

import {FormsModule} from "@angular/forms";



import {PageHeaderModule} from "../../../shared/modules";
import {CustomMaterialModule} from "../../../material/material.module";

@NgModule({
    imports: [CommonModule, ProfileRoutingModule, PageHeaderModule,FormsModule, CustomMaterialModule],
    declarations: [ProfileComponent],

})
export class ProfileModule {}
