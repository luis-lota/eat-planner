import { Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        title: 'Eat planner-login',
        component: LoginComponent
    },

    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },


    {
        path: '**', redirectTo: 'login', pathMatch: 'full'
    }
];
