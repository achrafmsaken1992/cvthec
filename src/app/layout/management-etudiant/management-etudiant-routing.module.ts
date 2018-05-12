import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementEtudiantComponent } from './management-etudiant.component';

const routes: Routes = [
    {
        path: '', component: ManagementEtudiantComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementEtudiantRoutingModule { }
