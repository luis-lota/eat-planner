import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './user-profile/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren : () => import('./auth/auth.routes').then(m => m.authRoutes)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./user-profile/user-profile.routes').then(m => m.UserProfileRoutes)
    },
    {
        path: '', redirectTo: '', pathMatch: 'full' // Redirect to the root URL
    },
    {
        path: '**', redirectTo: '', pathMatch: 'full' // Redirect to the root URL for any other unmatched paths
    }
];