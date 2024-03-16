import { Action, createReducer, on } from "@ngrx/store";
import { FeatureAuthActions } from "../actions";

export const featureKey = 'auth';

export interface featureAuthState {
  token: string,
  refreshToken: string;
  loading: boolean;
  error: any;
  success: boolean;
  result: any;
}

export const initialState: featureAuthState = {
  token: '',
  refreshToken: '',
  loading: false,
  error: null,
  success: false,
  result: null || {}
};

export const authReducer = createReducer(initialState,
  on(FeatureAuthActions.initAuth, state => ({ ...state, loading: false })),
  on(FeatureAuthActions.Authloading, state => ({ ...state, loading: true })),
  on(FeatureAuthActions.postLoginAPI$, state => ({ ...state, loading: true })),
  on(FeatureAuthActions.postLoginSuccess$, (state, { result }) => ({ ...state, loading: false, success: true, result })),
  on(FeatureAuthActions.postLoginAPIError$, (state, { error }) => ({ ...state, loading: false, error })),
);

export function reducer(state: any | undefined, action: Action) {
  return authReducer(state, action);
}
