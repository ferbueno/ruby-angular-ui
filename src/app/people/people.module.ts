import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialFormControlsModule } from 'projects/angular-material-form-controls/src/public_api';
import { MaterialModule } from 'src/app/material/material.module';

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
  ]
})
export class PeopleModule {}
