import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderToolbarComponent } from './header-toolbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreMock } from 'src/app/tests/angular-services/store.mock';
import { AuthService } from '../../../auth/services/auth.service';
import { AuthServiceMock } from 'src/app/tests/app-services/auth.service.mock';
import { MatMenuModule } from '@angular/material';

describe('HeaderToolbarComponent', () => {
  let component: HeaderToolbarComponent;
  let fixture: ComponentFixture<HeaderToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [HeaderToolbarComponent],
      providers: [
        { provide: Store, useClass: StoreMock },
        { provide: AuthService, useClass: AuthServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
