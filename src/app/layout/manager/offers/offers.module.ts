import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersComponent } from './offers.component';
import { OffersRoutingModule} from './offers-routing.module';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../../shared/modules";



@NgModule({
    imports: [CommonModule, OffersRoutingModule, PageHeaderModule,FormsModule],
    declarations: [OffersComponent],

})
export class OffersModule {}
