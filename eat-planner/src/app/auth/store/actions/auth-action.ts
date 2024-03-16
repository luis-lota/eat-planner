import { createAction, props } from "@ngrx/store";

export const initAuth = createAction('[AUTH ACTION] initAuth');
export const Authloading = createAction('[AUTH ACTION] Authloading', props<{ loading: boolean }>());

export const postLoginAPI$ = createAction('[AUTH ACTION] postLoginAPI$');
export const postLoginSuccess$ = createAction('[AUTH ACTION] postLoginSuccess$', props<{ result: any }>());
export const postLoginAPIError$ = createAction('[AUTH ACTION] postLoginAPIError$', props<{ error: any }>());

export const postLogoutAPI$ = createAction('[AUTH ACTION] postLogoutAPI$');
export const postLogoutSuccess$ = createAction('[AUTH ACTION] postLogoutSuccess$');
export const postLogoutError$ = createAction('[AUTH ACTION] postLogoutError$');

export const getRefreshTokenAPI$ = createAction('[AUTH ACTION] getRefreshTokenAPI$');
export const getRefreshTokenSuccess$ = createAction('[AUTH ACTION] getRefreshTokenSuccess$');
export const getRefreshTokenError$ = createAction('[AUTH ACTION] getRefreshTokenError$');

export const getUserInfoAPI$ = createAction('[AUTH ACTION] getUserInfoAPI$');
export const getUserInfoSuccess$ = createAction('[AUTH ACTION] getUserInfoSuccess$');
export const getUserInfoError$ = createAction('[AUTH ACTION] getUserInfoError$');


