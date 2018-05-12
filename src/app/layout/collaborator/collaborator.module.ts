import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollaboratorRoutingModule } from './collaborator-routing.module';
import { CollaboratorComponent } from './collaborator.component';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../shared/modules";
import { AddCollaboratorComponent } from './add-collaborator/add-collaborator.component';
import {CustomMaterialModule} from "../../material/material.module";

@NgModule({
    imports: [CommonModule, CollaboratorRoutingModule, PageHeaderModule,FormsModule,CustomMaterialModule],
    declarations: [CollaboratorComponent],

})
export class CollaboratorModule{}
