import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterContainerComponent } from './register-container.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RegisterContainerComponent', () => {
  let component: RegisterContainerComponent;
  let fixture: ComponentFixture<RegisterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterContainerComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
