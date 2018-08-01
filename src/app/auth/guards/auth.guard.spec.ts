import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterMock } from 'src/app/tests/angular-services/router.mock';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthServiceMock } from 'src/app/tests/app-services/auth.service.mock';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useClass: RouterMock },
        { provide: AuthService, useClass: AuthServiceMock }
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
