import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  DisplayRhsComponent} from './display-rhs.component';

const routes: Routes = [
    {
        path: '', component: DisplayRhsComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class displayRhsRoutingModule { }
