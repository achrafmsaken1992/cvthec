import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultatQuizComponent } from './resultat-quiz.component';
import { ResultatQuizRoutingModule} from './resultat-quiz-routing.module';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";









@NgModule({
    imports: [CommonModule, ResultatQuizRoutingModule, PageHeaderModule,FormsModule],
    declarations: [ResultatQuizComponent],

})
export class ResultatQuizModule {}
