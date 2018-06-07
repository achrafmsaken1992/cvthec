import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeEtudiantComponent } from './liste-etudiant.component';
import { ListeEtudiantRoutingModule} from './liste-etudiant-routing.module';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";









@NgModule({
    imports: [CommonModule,ListeEtudiantRoutingModule, PageHeaderModule,FormsModule],
    declarations: [ListeEtudiantComponent],

})
export class ListeEtudiantModule {}
