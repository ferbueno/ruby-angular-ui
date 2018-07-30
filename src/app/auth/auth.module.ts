import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AngularMaterialFormControlsModule } from 'angular-material-form-controls';
import { MaterialModule } from 'src/app/material/material.module';

import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { reducer } from './state/auth.reducers';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterContainerComponent } from './register-container/register-container.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularMaterialFormControlsModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginContainerComponent
      },
      {
        path: 'register',
        component: RegisterContainerComponent
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]),
    StoreModule.forFeature('auth', reducer)
  ],
  declarations: [LoginContainerComponent, LoginFormComponent, RegisterFormComponent, RegisterContainerComponent]
})
export class AuthModule { }
