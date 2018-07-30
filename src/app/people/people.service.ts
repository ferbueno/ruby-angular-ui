import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Person } from './models/person.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  peopleUrl: string = environment.apiUrl + '/people';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.peopleUrl).pipe(
      catchError((error) => {
        console.log(error);
        const message = 'There was a problem retreiving your people list';
        const action = 'Ok';
        this.snackBar.open(message, action, {
          duration: 3000
        });
        return of([]);
      })
    );
  }
}
