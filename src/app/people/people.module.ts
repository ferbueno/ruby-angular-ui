import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialFormControlsModule } from 'projects/angular-material-form-controls/src/public_api';
import { TokenInterceptor } from 'src/app/auth/token.interceptor';
import { MaterialModule } from 'src/app/material/material.module';
import { PeopleService } from 'src/app/people/people.service';

import { PeopleTableContainerComponent } from './people-table-container/people-table-container.component';
import { PeopleTableComponent } from './people-table/people-table.component';
import { PersonFormContainerComponent } from './person-form-container/person-form-container.component';
import { PersonFormComponent } from './person-form/person-form.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularMaterialFormControlsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PeopleTableContainerComponent
      },
      {
        path: 'add',
        component: PersonFormContainerComponent
      }
    ])
  ],
  declarations: [
    PeopleTableContainerComponent,
    PeopleTableComponent,
    PersonFormContainerComponent,
    PersonFormComponent
  ],
  providers: [
    PeopleService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
})
export class PeopleModule {}
