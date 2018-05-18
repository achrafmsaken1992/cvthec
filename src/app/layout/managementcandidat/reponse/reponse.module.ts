import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReponseRoutingModule } from './reponse-routing.module';
import { ReponseComponent } from './reponse.component';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";





@NgModule({
    imports: [CommonModule, ReponseRoutingModule, PageHeaderModule,FormsModule],
    declarations: [ReponseComponent],

})
export class ReponseModule {}
