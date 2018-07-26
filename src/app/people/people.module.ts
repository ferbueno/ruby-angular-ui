import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleTableContainerComponent } from './people-table-container/people-table-container.component';
import { PeopleTableComponent } from './people-table/people-table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PeopleTableContainerComponent
      },
    ]),
  ],
  declarations: [PeopleTableContainerComponent, PeopleTableComponent]
})
export class PeopleModule { }
