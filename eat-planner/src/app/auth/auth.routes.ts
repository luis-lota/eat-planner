import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";

export const authRoutes: Routes = [
    
    {
        path: '',
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