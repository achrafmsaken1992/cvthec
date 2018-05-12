import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {addRhRoutingModule} from "./add-rh-routing.module";

import {FormsModule} from "@angular/forms";



import {PageHeaderModule} from "../../../../shared/modules";
import {CustomMaterialModule} from "../../../../material/material.module";
import {AddRhComponent} from "./add-rh.component";



@NgModule({
    imports: [CommonModule, addRhRoutingModule, PageHeaderModule,FormsModule, CustomMaterialModule],
    declarations: [ AddRhComponent],

})
export class AddUrhModule {}
