import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';

import { PeopleTableContainerComponent } from './people-table-container/people-table-container.component';
import { PeopleTableComponent } from './people-table/people-table.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: PeopleTableContainerComponent
      }
    ])
  ],
  declarations: [PeopleTableContainerComponent, PeopleTableComponent]
})
export class PeopleModule {}
