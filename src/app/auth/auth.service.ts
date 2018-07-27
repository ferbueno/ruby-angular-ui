import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NewAccount } from 'src/app/models/auth/new-account.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl = environment.apiUrl + '/users';

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private store: Store<any>
  ) {}

  register(newAccount: NewAccount): Observable<any> {
    const payload = {
      user: {
          first_name: newAccount.firstName,
          last_name: newAccount.lastName,
          email: newAccount.email,
          password: newAccount.password
      }
    };
    return this.http.post<NewAccount>(this.registerUrl, payload)
    .pipe(
      catchError(error => {
        const message = 'Ha ocurrido un error al crear su cuenta';
        const action = 'Ok';
        this.snackBar.open(message, action, {
          duration: 3000
        });
        return throwError(error);
      })
    );
  }

  login() {
    this.store.dispatch({
      type: 'USER_LOGIN',
      payload: 'Test'
    });
  }
}
