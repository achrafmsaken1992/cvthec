import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';

import {FormsModule} from "@angular/forms";

import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";



@NgModule({
    imports: [CommonModule, QuizRoutingModule, PageHeaderModule,FormsModule],
    declarations: [QuizComponent],

})
export class QuizModule {}
