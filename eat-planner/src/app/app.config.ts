import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule, provideStore } from '@ngrx/store';
import { ROOT_REDUCER, metaReducers } from './store/reducers'
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../environments/environment';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideStore(ROOT_REDUCER, { metaReducers }),
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
  importProvidersFrom(
    AuthModule.forRoot({
      ...environment.auth0,
    })
  ),
  ]
};
