import { isDevMode } from "@angular/core";
import * as fromRootReducer from './root-reduce';

import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';

import { rootReducer} from "./root-reduce";

export interface AppState {
    [fromRootReducer.featureKey]: fromRootReducer.State;
 }

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    root : rootReducer
};

export const metaReducers: MetaReducer<AppState>[] = !isDevMode() ? [] : [];