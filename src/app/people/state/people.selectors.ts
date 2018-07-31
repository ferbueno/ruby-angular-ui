import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PeopleState } from 'src/app/people/state';

const getPeopleFeatureState = createFeatureSelector<PeopleState>('people');

export const getPeopleState = createSelector(getPeopleFeatureState, state => state);
