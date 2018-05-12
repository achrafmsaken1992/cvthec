import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagerieRoutingModule } from './messagerie-manager-routing.module';
import { MessagerieManagerComponent } from './messagerie-manager.component';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";

@NgModule({
    imports: [CommonModule, MessagerieRoutingModule, PageHeaderModule,FormsModule],
    declarations: [MessagerieManagerComponent],

})
export class MessagerieManagerModule {}
