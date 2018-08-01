import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleTableComponent } from './people-table.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatTableModule, MatMenuModule } from '@angular/material';

describe('PeopleTableComponent', () => {
  let component: PeopleTableComponent;
  let fixture: ComponentFixture<PeopleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatMenuModule],
      declarations: [ PeopleTableComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
