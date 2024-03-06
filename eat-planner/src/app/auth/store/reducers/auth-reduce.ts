import { Action, createReducer, on } from "@ngrx/store";


export const featureKey = 'auth';

export const initialState = {
    token : '',
    refrsehToken : '',
    username : ''

};

export const authReducer = createReducer(initialState);

export function reducer(state: any | undefined, action: Action) {
  return authReducer(state, action);
}
