import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionComponent } from './question.component';
import { QuestionRoutingModule} from './question-routing.module';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";







@NgModule({
    imports: [CommonModule, QuestionRoutingModule, PageHeaderModule,FormsModule],
    declarations: [QuestionComponent],

})
export class QuestionModule {}
