import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFormComponent } from './person-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StoreMock } from 'src/app/tests/angular-services/store.mock';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PersonFormComponent', () => {
  let component: PersonFormComponent;
  let fixture: ComponentFixture<PersonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ PersonFormComponent ],
      providers: [{ provide: Store, useClass: StoreMock }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
