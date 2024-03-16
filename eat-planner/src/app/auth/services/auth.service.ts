import { Injectable } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class AuthServices {

    constructor(private auth: AuthService) { }

    postLogin(): Observable<any> {
        return this.auth.loginWithRedirect();
    }

    logout(): Observable<any> {
        return this.auth.logout();
    }

    getAccessToken(): Observable<any> {
        return this.auth.getAccessTokenSilently();
    }
}