import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AngularMaterialFormControlsModule } from 'angular-material-form-controls';
import { MaterialModule } from 'src/app/material/material.module';

import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { reducer } from './state/auth.reducer';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularMaterialFormControlsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginContainerComponent
      }
    ]),
    StoreModule.forFeature('auth', reducer)
  ],
  declarations: [LoginContainerComponent, LoginFormComponent]
})
export class AuthModule { }
