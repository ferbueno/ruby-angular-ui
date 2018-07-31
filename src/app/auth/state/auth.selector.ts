import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from 'src/app/auth/state';

const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const getAuthState = createSelector(getAuthFeatureState, state => state);
