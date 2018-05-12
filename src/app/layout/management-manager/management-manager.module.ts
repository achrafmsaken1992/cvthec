import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementManagerRoutingModule } from './management-manager-routing.module';
import { ManagementManagerComponent } from './management-manager.component';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../shared/modules";

@NgModule({
    imports: [CommonModule, ManagementManagerRoutingModule, PageHeaderModule,FormsModule],
    declarations: [ManagementManagerComponent],

})
export class ManagementManagerModule {}
