import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Person } from './models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  peopleUrl: string = environment.apiUrl + '/people';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getPeople(): Observable<Person[]> {
    return this.http
      .get<Person[]>(this.peopleUrl)
      .pipe(
        catchError(() =>
          this.handleError('There was a problem retreiving your people list')
        )
      );
  }

  getPerson(id: number): Observable<Person> {
    return this.http
      .get<Person>(this.peopleUrl.concat('/' + id))
      .pipe(
        catchError(() =>
          this.handleError('There was a problem getting this person')
        )
      );
  }

  addPerson(person: Person): Observable<Person> {
    const payload = {
      person: {
        name: person.name,
        last_name: person.lastName,
        age: +person.age
      }
    };
    return this.http
      .post<Person>(this.peopleUrl, payload)
      .pipe(
        catchError(() =>
          this.handleError('There was a problem adding this person')
        )
      );
  }

  updatePerson(person: Person): Observable<Person> {
    const payload = {
      person: {
        name: person.name,
        last_name: person.lastName,
        age: +person.age
      }
    };
    return this.http
      .put<Person>(this.peopleUrl.concat('/' + person.id), payload)
      .pipe(
        catchError(() =>
          this.handleError('There was a problem updating this person')
        )
      );
  }

  deletePerson(id: number): Observable<Person> {
    return this.http
      .delete<Person>(this.peopleUrl.concat('/' + id))
      .pipe(
        catchError(() =>
          this.handleError('There was a problem deleting this person')
        )
      );
  }

  private handleError(message: string): Observable<never> {
    const action = 'Ok';
    this.snackBar.open(message, action, {
      duration: 3000
    });
    return throwError(message);
  }
}
