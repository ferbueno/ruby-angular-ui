import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Person } from 'src/app/people/models/person.model';
import { PeopleService } from 'src/app/people/people.service';
import { AddPerson, AddPersonSuccess, GetPeopleSuccess, PeopleActionTypes, AddPersonFailed } from 'src/app/people/state/people.actions';

@Injectable()
export class PeopleEffects {
  constructor(
    private actions$: Actions,
    private peopleService: PeopleService
  ) {}

  @Effect()
  getPeople$ = this.actions$.pipe(
    ofType(PeopleActionTypes.GetPeople),
    switchMap(() => this.peopleService.getPeople()),
    map(response => new GetPeopleSuccess(response))
  );

  @Effect()
  addPerson$ = this.actions$.pipe(
    ofType(PeopleActionTypes.AddPerson),
    map((action: AddPerson) => action.payload),
    mergeMap((person: Person) =>
      this.peopleService.addPerson(person).pipe(
        map(() => new AddPersonSuccess()),
        catchError(err => of(new AddPersonFailed()))
      )
    )
  );
}
