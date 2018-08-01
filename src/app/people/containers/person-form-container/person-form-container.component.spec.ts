import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFormContainerComponent } from './person-form-container.component';
import { ActivatedRoute } from '@angular/router';
import { RouteMock } from 'src/app/tests/angular-services/route.mock';
import { Store } from '@ngrx/store';
import { StoreMock } from 'src/app/tests/angular-services/store.mock';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PersonFormContainerComponent', () => {
  let component: PersonFormContainerComponent;
  let fixture: ComponentFixture<PersonFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonFormContainerComponent ],
      providers: [
        { provide: Store, useClass: StoreMock },
        { provide: ActivatedRoute, useClass: RouteMock },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
