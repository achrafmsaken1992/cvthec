import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeEntrepriseComponent } from './liste-entreprise.component';

const routes: Routes = [
    {
        path: '', component: ListeEntrepriseComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListeEntrepriseRoutingModule { }
