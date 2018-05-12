import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './details-candidat-routing.module';
import { DetailsCandidatComponent } from './details-candidat.component';
import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";
import {FormsModule} from "@angular/forms";
import { ModalAddExperienceComponent } from './modal-add-experience/modal-add-experience.component';
import { ModalAddFormationComponent } from './modal-add-formation/modal-add-formation.component';
import { ModalAddLangueComponent } from './modal-add-langue/modal-add-langue.component';
import { ModalAddCompetanceComponent } from './modal-add-competance/modal-add-competance.component';
import {CustomMaterialModule} from "../../../material/material.module";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { FlashMessagesModule } from 'angular2-flash-messages';

import { ModalUpdateCompetanceComponent } from './modal-update-competance/modal-update-competance.component';
import { ModalUpdateLangueComponent } from './modal-update-langue/modal-update-langue.component';
import {ToasterModule} from "angular5-toaster/dist";
import { ModalUpdateExperienceComponent } from './modal-update-experience/modal-update-experience.component';
import { ModalUpdateFormationComponent } from './modal-update-formation/modal-update-formation.component';

@NgModule({
    imports: [CommonModule, GridRoutingModule, PageHeaderModule,FormsModule, CustomMaterialModule,GooglePlaceModule, FlashMessagesModule.forRoot(), ToasterModule],
    declarations: [DetailsCandidatComponent, ModalAddExperienceComponent, ModalAddFormationComponent, ModalAddLangueComponent, ModalAddCompetanceComponent, ModalUpdateCompetanceComponent, ModalUpdateLangueComponent, ModalUpdateExperienceComponent, ModalUpdateFormationComponent],

})
export class DetailscandidatModule {}
