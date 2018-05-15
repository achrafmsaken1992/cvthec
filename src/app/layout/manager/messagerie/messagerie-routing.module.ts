import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagerieComponent } from './messagerie.component';

const routes: Routes = [
    {
        path: '', component: MessagerieComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MessagerieRoutingModule { }
