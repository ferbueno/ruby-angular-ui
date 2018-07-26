import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        children: [
          {
            path: '',
            loadChildren: 'src/app/people/people.module#PeopleModule'
          }
        ]
      }
    ])
  ],
  declarations: [DashboardComponent, HeaderToolbarComponent]
})
export class DashboardModule {}
