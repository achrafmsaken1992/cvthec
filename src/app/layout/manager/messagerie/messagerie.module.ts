import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagerieComponent } from './messagerie.component';
import { MessagerieRoutingModule} from './messagerie-routing.module';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";
import {MomentModule} from 'angular2-moment';




@NgModule({
    imports: [CommonModule, MessagerieRoutingModule, PageHeaderModule,FormsModule, MomentModule],
    declarations: [MessagerieComponent],

})
export class MessagerieModule {}
