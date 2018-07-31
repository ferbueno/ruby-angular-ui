import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { AngularMaterialFormControlsModule } from 'projects/angular-material-form-controls/src/public_api';
import { MaterialModule } from 'src/app/material/material.module';
import { PeopleTableComponent } from 'src/app/people/components/people-table/people-table.component';
import { PersonFormComponent } from 'src/app/people/components/person-form/person-form.component';
import { PeopleTableContainerComponent } from 'src/app/people/containers/people-table-container/people-table-container.component';
import { PersonFormContainerComponent } from 'src/app/people/containers/person-form-container/person-form-container.component';
import { PeopleEffects } from 'src/app/people/state/people.effects';
import { StoreModule } from '@ngrx/store';
import { peopleReducer } from 'src/app/people/state/people.reducers';

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
    ]),
    StoreModule.forFeature('people', peopleReducer),
    EffectsModule.forFeature([PeopleEffects])
  ],
  declarations: [
    PeopleTableContainerComponent,
    PeopleTableComponent,
    PersonFormContainerComponent,
    PersonFormComponent
  ]
})
export class PeopleModule {}
