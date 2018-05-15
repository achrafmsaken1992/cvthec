import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizsOffersComponent } from './quizs-offers.component';
import { QuizsOffersRoutingModule} from './quizs-offers-routing.module';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";






@NgModule({
    imports: [CommonModule, QuizsOffersRoutingModule, PageHeaderModule,FormsModule],
    declarations: [QuizsOffersComponent],

})
export class QuizsOffersModule {}
