import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateAuthComponent } from './update-auth.component';

const routes: Routes = [
    {
        path: '', component: UpdateAuthComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class updateAuthRoutingModule {
}
