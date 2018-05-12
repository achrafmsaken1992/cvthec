import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCollaboratorComponent } from './add-collaborator.component';

const routes: Routes = [
    {
        path: '', component: AddCollaboratorComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCollaboratorRoutingModule { }
