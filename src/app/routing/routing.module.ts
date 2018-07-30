import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'auth',
        loadChildren: 'src/app/auth/auth.module#AuthModule'
      },
      {
        path: 'dashboard',
        loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RoutingModule { }
