import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionComponent } from './suggestion.component';
import { SuggestionRoutingModule} from './suggestion-routing.module';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";







@NgModule({
    imports: [CommonModule, SuggestionRoutingModule, PageHeaderModule,FormsModule],
    declarations: [SuggestionComponent],

})
export class SuggestionModule {}
