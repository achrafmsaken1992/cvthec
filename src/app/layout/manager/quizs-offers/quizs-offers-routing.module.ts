import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizsOffersComponent } from './quizs-offers.component';

const routes: Routes = [
    {
        path: '', component: QuizsOffersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuizsOffersRoutingModule { }
