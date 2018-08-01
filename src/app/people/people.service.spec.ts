import { TestBed, inject } from '@angular/core/testing';

import { PeopleService } from './people.service';
import { HttpClient } from '@angular/common/http';
import { HttpMock } from 'src/app/tests/angular-services/http.mock';
import { MatSnackBar } from '@angular/material';
import { SnackbarMock } from 'src/app/tests/angular-services/snackbar.mock';

describe('PeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PeopleService,
        { provide: HttpClient, useClass: HttpMock },
        { provide: MatSnackBar, useClass: SnackbarMock }
      ]
    });
  });

  it('should be created', inject([PeopleService], (service: PeopleService) => {
    expect(service).toBeTruthy();
  }));
});
