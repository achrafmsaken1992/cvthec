import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './add-candidat-routing.module';
import { AddCandidatComponent } from './add-candidat.component';
import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, GridRoutingModule, PageHeaderModule,FormsModule],
    declarations: [AddCandidatComponent],

})
export class AddcandidatModule {}
