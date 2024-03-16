import { isDevMode } from "@angular/core";
import * as fromRootReducer from './root-reduce';
import * as fromAuthReducer from '../../auth/store/reducers/auth-reduce';

import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';

import { rootReducer} from "./root-reduce";
import { authReducer } from "../../auth/store/reducers/auth-reduce";

export interface AppState {
    [fromRootReducer.featureKey]: fromRootReducer.State;
    [fromAuthReducer.featureKey]: fromAuthReducer.featureAuthState;
 }

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    root : rootReducer,
    auth : authReducer
};

export const metaReducers: MetaReducer<AppState>[] = !isDevMode() ? [] : [];