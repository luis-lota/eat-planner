import { isDevMode } from "@angular/core";

import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { counterReducer } from "./counter-reduce";

export interface State { }

export const reducers: ActionReducerMap<State> = {
    counter : counterReducer
};

export const metaReducers: MetaReducer<State>[] = !isDevMode() ? [] : [];