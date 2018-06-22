import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementEtudiantRoutingModule } from './management-etudiant-routing.module';
import { ManagementEtudiantComponent} from './management-etudiant.component';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../shared/modules";
import {CustomMaterialModule} from "../../material/material.module";

@NgModule({
    imports: [CommonModule, ManagementEtudiantRoutingModule, PageHeaderModule,FormsModule, CustomMaterialModule],
    declarations: [ManagementEtudiantComponent],

})
export class ManagementEtudiantModule {}
