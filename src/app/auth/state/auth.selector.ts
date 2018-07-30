import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from 'src/app/models/state/auth-state.model';

const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const getAuthState = createSelector(getAuthFeatureState, state => state);
