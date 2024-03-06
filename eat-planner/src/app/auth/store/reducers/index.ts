import { isDevMode } from "@angular/core";

import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { authReducer } from "./auth-reduce";

export interface State { }

export const ROOT_REDUCER: ActionReducerMap<State> = {
    auth : authReducer
};

export const metaReducers: MetaReducer<State>[] = !isDevMode() ? [] : [];