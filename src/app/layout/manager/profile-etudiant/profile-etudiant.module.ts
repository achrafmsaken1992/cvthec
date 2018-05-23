import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileEtudiantComponent } from './profile-etudiant.component';
import { ProfileEtudiantRoutingModule} from './profile-etudiant-routing.module';

import {FormsModule} from "@angular/forms";
import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";








@NgModule({
    imports: [CommonModule, ProfileEtudiantRoutingModule, PageHeaderModule,FormsModule],
    declarations: [ProfileEtudiantComponent],

})
export class ProfileEtudiantModule {}
