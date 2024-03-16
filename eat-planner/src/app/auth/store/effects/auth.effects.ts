import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthServices } from '../../services'
import { featureAuthState } from '../reducers/auth-reduce';
import { FeatureAuthActions } from '../actions';


@Injectable()
export class AuthEffects {
        postLogin$ = createEffect(() =>
        this.actions$.pipe(
          ofType(FeatureAuthActions.postLoginAPI$),
          tap(() => {
            this.store.dispatch(
              FeatureAuthActions.Authloading({ loading: true })
            );
          }),

          switchMap((payload) => {
            return this.AuthServices.postLogin().pipe(
              map((response) => {
                return {
                  type: FeatureAuthActions.postLogoutSuccess$.type,
                  result: response,
                };
              }),
              catchError((error: any) => {
                return of({
                  type: FeatureAuthActions.postLoginAPIError$.type,
                  error,
                });
              })
            );
          })
        )
      );

    constructor(
        private actions$: Actions,
        private AuthServices: AuthServices,
        private store: Store<featureAuthState>,
    ) { }
}