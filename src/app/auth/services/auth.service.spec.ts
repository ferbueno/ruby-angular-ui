import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { RouterMock } from 'src/app/tests/angular-services/router.mock';
import { Store } from '@ngrx/store';
import { StoreMock } from 'src/app/tests/angular-services/store.mock';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { HttpMock } from 'src/app/tests/angular-services/http.mock';
import { SnackbarMock } from 'src/app/tests/angular-services/snackbar.mock';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Router, useClass: RouterMock },
        { provide: Store, useClass: StoreMock },
        { provide: HttpClient, useClass: HttpMock },
        { provide: MatSnackBar, useClass: SnackbarMock }
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
