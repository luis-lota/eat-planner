import { Injectable } from '@angular/core';
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class CustomAuthGuard implements CanActivate {
    isRedirect = false;
    constructor(
        private auth: AuthService,
        private router: Router
    ) { }

    canActivate(
    ): Observable<boolean> | boolean {

        if (this.isRedirect) {
            return true;
        }

        return this.auth.isAuthenticated$.pipe(
            map((isAuthenticated: boolean) => {
                if (isAuthenticated && this.router.url !== '/dashboard') {
                    this.isRedirect = true;
                    this.router.navigate(['/dashboard']);
                    return false;
                }

                else if (!isAuthenticated && this.router.url !== '/login') {
                    this.isRedirect = true;
                    this.router.navigate(['/login']);
                    return false;

                }
                return true;
            })
        )
    }
}
