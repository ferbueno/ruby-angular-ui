import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Person } from 'src/app/people/models/person.model';
import { PeopleService } from 'src/app/people/people.service';
import {
  AddPerson,
  AddPersonFailed,
  AddPersonSuccess,
  GetPeopleSuccess,
  GetPerson,
  GetPersonFailed,
  GetPersonSuccess,
  PeopleActionTypes,
} from 'src/app/people/state/people.actions';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable()
export class PeopleEffects {
  constructor(
    private actions$: Actions,
    private peopleService: PeopleService,
    private router: Router
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

  @Effect()
  getPerson$: Observable<Action> = this.actions$.pipe(
    ofType(PeopleActionTypes.GetPerson),
    map((action: GetPerson) => action.payload),
    mergeMap((id: number) =>
      this.peopleService.getPerson(id).pipe(
        map((person: Person) => new GetPersonSuccess(person)),
        catchError(err => of(new GetPersonFailed()))
      )
    )
  );

  @Effect({ dispatch: false })
  getPersonSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(PeopleActionTypes.GetPeopleSuccess),
    tap((lol) => {
      console.log(lol);
      this.router.navigateByUrl('/dashboard/people');
    })
  );
}
