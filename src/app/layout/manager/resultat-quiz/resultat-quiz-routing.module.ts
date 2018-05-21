import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultatQuizComponent } from './resultat-quiz.component';

const routes: Routes = [
    {
        path: '', component: ResultatQuizComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResultatQuizRoutingModule { }
