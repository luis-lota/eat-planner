import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileDetailsComponent } from "../profile-details/profile-details.component";
import { AuthGuard } from "@auth0/auth0-angular";


export const UserProfileRoutes: Routes = [
    {
        path: '',
        title: 'Eat planner-dashboard',
        component: DashboardComponent
    },

    {
        path: 'profile-details',
        title: 'Eat planner-profile-details',
        component: ProfileDetailsComponent,
        canActivate: [AuthGuard]
    },

    {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
    },


    {
        path: '**', redirectTo: 'dashboard', pathMatch: 'full'
    }
];