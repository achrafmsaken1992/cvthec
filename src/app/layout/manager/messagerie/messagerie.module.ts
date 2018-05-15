import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagerieComponent } from './messagerie.component';
import { MessagerieRoutingModule} from './messagerie-routing.module';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";




@NgModule({
    imports: [CommonModule, MessagerieRoutingModule, PageHeaderModule,FormsModule],
    declarations: [MessagerieComponent],

})
export class MessagerieModule {}
