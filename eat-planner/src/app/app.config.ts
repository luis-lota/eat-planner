import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { ROOT_REDUCER, metaReducers } from './store/reducers'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './auth/store/effects/auth.effects';
import { environment } from '../environments/environment';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideStore(ROOT_REDUCER, { metaReducers }),
        provideEffects(AuthEffects),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthHttpInterceptor,
            multi: true
        },
        provideStoreDevtools({
            maxAge: 25,
            autoPause: true,
            trace: true,
            traceLimit: 25
        }),
        importProvidersFrom(AuthModule.forRoot({
            ...environment.auth0,
            cacheLocation: 'localstorage'
        })), provideEffects()]
};
