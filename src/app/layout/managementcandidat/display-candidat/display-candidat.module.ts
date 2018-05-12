import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './display-candidat-routing.module';
import { DisplayCandidatComponent } from './display-candidat.component';
import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, GridRoutingModule, PageHeaderModule,FormsModule],
    declarations: [DisplayCandidatComponent],

})
export class DisplaycandidatModule {}
