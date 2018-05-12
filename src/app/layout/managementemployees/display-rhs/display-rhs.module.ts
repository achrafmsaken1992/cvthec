import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {displayRhsRoutingModule} from "./display-rhs-routing.module";
import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";
import {FormsModule} from "@angular/forms";
import {CustomMaterialModule} from "../../../material/material.module";
import { DisplayRhsComponent } from './display-rhs.component';



@NgModule({
    imports: [CommonModule, displayRhsRoutingModule, PageHeaderModule,FormsModule, CustomMaterialModule],
    declarations: [DisplayRhsComponent],

})
export class DisplayUrhModule {}
