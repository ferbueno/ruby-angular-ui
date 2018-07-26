import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';

import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AngularMaterialFormControlsModule } from 'angular-material-form-controls';

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
    ])
  ],
  declarations: [LoginContainerComponent, LoginFormComponent]
})
export class AuthModule { }
