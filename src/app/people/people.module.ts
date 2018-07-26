import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleTableContainerComponent } from './people-table-container/people-table-container.component';
import { PeopleTableComponent } from './people-table/people-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PeopleTableContainerComponent, PeopleTableComponent]
})
export class PeopleModule { }
