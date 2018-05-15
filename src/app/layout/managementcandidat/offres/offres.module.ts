import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffresRoutingModule } from './offres-routing.module';
import { OffresComponent } from './offres.component';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";


@NgModule({
    imports: [CommonModule, OffresRoutingModule, PageHeaderModule,FormsModule],
    declarations: [OffresComponent],

})
export class OffersModule {}
