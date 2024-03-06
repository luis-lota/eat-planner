import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const selectFeature = (state: AppState) => state['root'];

export const selectLoading = createSelector(
  selectFeature,
  (state) => state.loading
);