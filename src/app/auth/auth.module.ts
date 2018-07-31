import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AngularMaterialFormControlsModule } from 'angular-material-form-controls';
import { LoginFormComponent } from 'src/app/auth/components/login-form/login-form.component';
import { RegisterFormComponent } from 'src/app/auth/components/register-form/register-form.component';
import { LoginContainerComponent } from 'src/app/auth/containers/login-container/login-container.component';
import { RegisterContainerComponent } from 'src/app/auth/containers/register-container/register-container.component';
import { AuthEffects } from 'src/app/auth/state/auth.effects';
import { MaterialModule } from 'src/app/material/material.module';

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
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [
    LoginContainerComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RegisterContainerComponent
  ]
})
export class AuthModule {}
