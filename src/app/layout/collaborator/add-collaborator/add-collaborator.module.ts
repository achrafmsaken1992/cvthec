import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCollaboratorRoutingModule } from './add-collaborator-routing.module';


import {FormsModule} from "@angular/forms";

import { AddCollaboratorComponent } from './add-collaborator.component';
import {PageHeaderModule} from "../../../shared/modules";

@NgModule({
    imports: [CommonModule, AddCollaboratorRoutingModule, PageHeaderModule,FormsModule],
    declarations: [ AddCollaboratorComponent],

})
export class AddCollaboratorModule{}
