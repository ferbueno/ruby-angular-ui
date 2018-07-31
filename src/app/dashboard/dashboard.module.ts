import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/components/dashboard/dashboard.component';
import { HeaderToolbarComponent } from 'src/app/dashboard/components/header-toolbar/header-toolbar.component';
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
            path: 'people',
            loadChildren: 'src/app/people/people.module#PeopleModule'
          },
          {
            path: '',
            redirectTo: 'people',
            pathMatch: 'full'
          }
        ]
      }
    ])
  ],
  declarations: [DashboardComponent, HeaderToolbarComponent]
})
export class DashboardModule {}
