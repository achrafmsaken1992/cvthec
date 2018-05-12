import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  AddRhComponent} from './add-rh.component';

const routes: Routes = [
    {
        path: '', component: AddRhComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class addRhRoutingModule { }
