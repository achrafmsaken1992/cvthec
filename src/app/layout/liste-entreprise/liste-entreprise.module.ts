import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeEntrepriseRoutingModule } from './liste-entreprise-routing.module';
import { ListeEntrepriseComponent} from './liste-entreprise.component';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../shared/modules";
import {CustomMaterialModule} from "../../material/material.module";

@NgModule({
    imports: [CommonModule, ListeEntrepriseRoutingModule, PageHeaderModule,FormsModule, CustomMaterialModule],
    declarations: [ListeEntrepriseComponent],

})
export class ListeEntrepriseModule {}
