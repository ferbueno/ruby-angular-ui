import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFormContainerComponent } from './person-form-container.component';

describe('PersonFormContainerComponent', () => {
  let component: PersonFormContainerComponent;
  let fixture: ComponentFixture<PersonFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonFormContainerComponent ]
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
