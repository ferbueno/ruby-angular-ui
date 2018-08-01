import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StoreMock } from 'src/app/tests/angular-services/store.mock';

import { LoginFormComponent } from './login-form.component';
import { of } from 'rxjs';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginFormComponent],
      providers: [{ provide: Store, useClass: StoreMock }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get the loading state from the store', () => {
    spyOn(component['store'], 'pipe').and.returnValue(of({loading: true}));
    component.ngOnInit();
    expect(component.loading).toBeTruthy();
  });
  it('should submit the form if valid', () => {
    const loginEmitterSpy = spyOn(component.loginEmitter, 'emit');
    component.onSubmit();
    expect(loginEmitterSpy).not.toHaveBeenCalledWith(component.form.value);
    component.form.patchValue({
      email: 'test@test.com',
      password: 'test'
    });
    component.onSubmit();
    expect(loginEmitterSpy).toHaveBeenCalledWith(component.form.value);
  });
});
