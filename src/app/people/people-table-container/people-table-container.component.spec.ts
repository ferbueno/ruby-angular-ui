import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleTableContainerComponent } from './people-table-container.component';

describe('PeopleTableContainerComponent', () => {
  let component: PeopleTableContainerComponent;
  let fixture: ComponentFixture<PeopleTableContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleTableContainerComponent ]
    })
    .compileComponents();
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
