import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContainerComponent } from './login-container.component';
import { Store } from '@ngrx/store';
import { StoreMock } from 'src/app/tests/angular-services/store.mock';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LoginContainerComponent', () => {
  let component: LoginContainerComponent;
  let fixture: ComponentFixture<LoginContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginContainerComponent],
      providers: [{ provide: Store, useClass: StoreMock }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
