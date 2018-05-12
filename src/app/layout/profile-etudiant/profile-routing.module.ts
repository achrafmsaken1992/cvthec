import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileUrhComponent } from './profile.component';

const routes: Routes = [
    {
        path: '', component: ProfileUrhComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class urhRoutingModule { }
