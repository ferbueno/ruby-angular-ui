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

  addPerson(person: Person): Observable<Person> {
    return this.http
      .post<Person>(this.peopleUrl, person)
      .pipe(
        catchError(() =>
          this.handleError('There was a problem adding this person')
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
