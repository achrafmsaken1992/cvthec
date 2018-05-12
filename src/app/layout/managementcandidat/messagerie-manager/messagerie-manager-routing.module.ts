import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagerieManagerComponent } from './messagerie-manager.component';

const routes: Routes = [
    {
        path: '', component: MessagerieManagerComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagerieRoutingModule { }
