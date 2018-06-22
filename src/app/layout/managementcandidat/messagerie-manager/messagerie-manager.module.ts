import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagerieRoutingModule } from './messagerie-manager-routing.module';
import { MessagerieManagerComponent } from './messagerie-manager.component';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";
import {MomentModule} from 'angular2-moment';

@NgModule({
    imports: [CommonModule, MessagerieRoutingModule, PageHeaderModule,FormsModule, MomentModule],
    declarations: [MessagerieManagerComponent],

})
export class MessagerieManagerModule {}
