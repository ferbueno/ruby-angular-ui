import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: 'src/app/people/people.module#PeopleModule'
      }
    ]),
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
