import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import {ForgetpasswordModule} from "./forget-password/forget-password.module";

const routes: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: 'accueil', loadChildren:'./home/reception/reception.module#ReceptionModule' },
    { path: 'contact', loadChildren:'./home/contact/contact.module#ContactModule' },
   { path: 'forgetpassword', loadChildren:'./forget-password/forget-password.module#ForgetpasswordModule' },
    { path: 'updateAuth/:token', loadChildren:'./update-auth/update-auth.module#updateAuthModule' },
    { path: 'activation/:token', loadChildren: './layout/activation/activation.module#ActivationModule'},
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
