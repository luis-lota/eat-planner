import { Routes } from '@angular/router';
import { CustomAuthGuard } from './auth/guards/auth.guard';


export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.routes').then(m => m.authRoutes),
        canActivate: []
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./user-profile/user-profile.routes').then(m => m.UserProfileRoutes),
        canActivate: [CustomAuthGuard]
    },
    {
        path: '', redirectTo: 'dashboard', pathMatch: 'full' // Redirect to the dashboard when accessing the root URL
    },
    {
        path: '**', redirectTo: 'login', pathMatch: 'full' // Redirect to the dashboard for any other unmatched paths
    }
];


