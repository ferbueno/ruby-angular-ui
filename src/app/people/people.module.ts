import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialFormControlsModule } from '@blungo/angular-material-form-controls';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from 'src/app/material/material.module';
import { PeopleTableComponent } from 'src/app/people/components/people-table/people-table.component';
import { PersonFormComponent } from 'src/app/people/components/person-form/person-form.component';
import { PeopleTableContainerComponent } from 'src/app/people/containers/people-table-container/people-table-container.component';
import { PersonFormContainerComponent } from 'src/app/people/containers/person-form-container/person-form-container.component';
import { PeopleEffects } from 'src/app/people/state/people.effects';
import { peopleReducer } from 'src/app/people/state/people.reducers';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularMaterialFormControlsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PeopleTableContainerComponent
      },
      {
        path: 'add',
        component: PersonFormContainerComponent
      },
      {
        path: ':id',
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
