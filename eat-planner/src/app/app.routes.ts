import { Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'login',
        title: 'Eat planner-login',
        component: LoginComponent
    },

    {
        path: 'dashboard',
        title: 'Eat planner-dashboard',
        component: DashboardComponent
    },

    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },


    {
        path: '**', redirectTo: 'login', pathMatch: 'full'
    }
];
