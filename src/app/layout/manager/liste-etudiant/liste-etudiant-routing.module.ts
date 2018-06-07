import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeEtudiantComponent } from './liste-etudiant.component';

const routes: Routes = [
    {
        path: '', component: ListeEtudiantComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListeEtudiantRoutingModule { }
