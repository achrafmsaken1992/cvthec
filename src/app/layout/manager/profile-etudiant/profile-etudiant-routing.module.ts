import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileEtudiantComponent } from './profile-etudiant.component';

const routes: Routes = [
    {
        path: '', component: ProfileEtudiantComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileEtudiantRoutingModule { }
