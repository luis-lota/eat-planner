import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.routes').then(m => m.authRoutes)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./user-profile/user-profile.routes').then(m => m.UserProfileRoutes)
    },
    {
        path: '', redirectTo: 'dashboard', pathMatch: 'full' // Redirect to the dashboard when accessing the root URL
    },
    {
        path: '**', redirectTo: 'dashboard', pathMatch: 'full' // Redirect to the dashboard for any other unmatched paths
    }
];
