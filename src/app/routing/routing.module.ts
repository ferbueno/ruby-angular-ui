import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'auth',
        loadChildren: 'src/app/auth/auth.module#AuthModule'
      },
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [RouterModule],
})
export class RoutingModule { }
