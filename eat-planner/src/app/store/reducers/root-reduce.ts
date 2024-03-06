import { createReducer } from "@ngrx/store";

export const featureKey = 'root';

export interface State {
    loading: boolean;
  }
  
  export const initialState: State = {
    loading: false,
  };

export const rootReducer = createReducer(
    initialState
);