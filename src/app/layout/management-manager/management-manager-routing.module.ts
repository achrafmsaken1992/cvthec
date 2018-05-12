import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementManagerComponent } from './management-manager.component';

const routes: Routes = [
    {
        path: '', component: ManagementManagerComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementManagerRoutingModule { }
