import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './user-profile/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'login',
        title: 'Eat planner-login',
       loadChildren : () => import('./auth/auth.routes').then(m => m.authRoutes)
    },

    {
        path: 'dashboard',
        title: 'Eat planner-dashboard',
        loadChildren: () => import('./user-profile/user-profile.routes').then(m => m.UserProfileRoutes)
    },
    {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: 'dashboard', pathMatch: 'full'
    }
];
