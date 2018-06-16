import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'add-candidat', loadChildren: './managementcandidat/add-candidat/add-candidat.module#AddcandidatModule' },
            { path: 'display-candidat', loadChildren: './managementcandidat/display-candidat/display-candidat.module#DisplaycandidatModule'},
            { path: 'detailscandidat', loadChildren: './managementcandidat/details-candidat/details-candidat.module#DetailscandidatModule'},
            { path: 'CompteEtudiant', loadChildren: './profile-etudiant/profile.module#ProfileUrhModule'},
            { path: 'displayUrh', loadChildren: './managementemployees/display-rhs/display-rhs.module#DisplayUrhModule'},
            { path: 'addUrh', loadChildren: './managementemployees/display-rhs/add-rh/add-rh.module#AddUrhModule'},
            { path: 'managementManager', loadChildren: './management-manager/management-manager.module#ManagementManagerModule'},


            { path: 'managementEtudiant', loadChildren: './management-etudiant/management-etudiant.module#ManagementEtudiantModule'},
            { path: 'display-collaborateur', loadChildren: './collaborator/collaborator.module#CollaboratorModule'},
            { path: 'add-collaborateur', loadChildren: './collaborator/add-collaborator/add-collaborator.module#AddCollaboratorModule'},
            { path: 'management-offers', loadChildren: './manager/offers/offers.module#OffersModule'},

            { path: 'liste-etudiants', loadChildren: './manager/liste-etudiant/liste-etudiant.module#ListeEtudiantModule'},

            { path: 'messagerie-etudiant', loadChildren: './managementcandidat/messagerie-manager/messagerie-manager.module#MessagerieManagerModule'},
            { path: 'messagerie-etudiant/:id', loadChildren: './managementcandidat/messagerie-manager/messagerie-manager.module#MessagerieManagerModule'},

            { path: 'compteManager', loadChildren: './manager/profile/profile.module#ProfileModule'},
            { path: 'messagerie-manager', loadChildren: './manager/messagerie/messagerie.module#MessagerieModule'},
            { path: 'messagerie-manager/:id', loadChildren: './manager/messagerie/messagerie.module#MessagerieModule'},
            { path: 'offres', loadChildren: './managementcandidat/offres/offres.module#OffersModule'},
            { path: 'liste-quizs/:id', loadChildren: './manager/quizs-offers/quizs-offers.module#QuizsOffersModule'},
            { path: 'resultat-quiz/:id', loadChildren: './manager/resultat-quiz/resultat-quiz.module#ResultatQuizModule'},
            {path:'liste-questions/:id',loadChildren: './manager/question/question.module#QuestionModule'},
            {path:'liste-suggestions/:id',loadChildren: './manager/suggestion/suggestion.module#SuggestionModule'},
            {path:'quizs/:id',loadChildren: './managementcandidat/quiz/quiz.module#QuizModule'},
            {path:'test/:id',loadChildren: './managementcandidat/reponse/reponse.module#ReponseModule'},
            {path:'profile-etudiant/:id',loadChildren: './manager/profile-etudiant/profile-etudiant.module#ProfileEtudiantModule'}
            ],

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
