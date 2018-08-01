import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleTableContainerComponent } from './people-table-container.component';
import { Router } from '@angular/router';
import { RouterMock } from 'src/app/tests/angular-services/router.mock';
import { Store } from '@ngrx/store';
import { StoreMock } from 'src/app/tests/angular-services/store.mock';
import { MatDialog } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DialogMock } from 'src/app/tests/angular-services/dialog.mock';

describe('PeopleTableContainerComponent', () => {
  let component: PeopleTableContainerComponent;
  let fixture: ComponentFixture<PeopleTableContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleTableContainerComponent],
      providers: [
        { provide: Store, useClass: StoreMock },
        { provide: Router, useClass: RouterMock },
        { provide: MatDialog, useClass: DialogMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
