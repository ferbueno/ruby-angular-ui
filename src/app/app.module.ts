import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TokenInterceptor } from 'src/app/auth/token.interceptor';
import { MaterialModule } from 'src/app/material/material.module';
import { RoutingModule } from 'src/app/routing/routing.module';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { authReducer } from 'src/app/auth/state/auth.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      auth: authReducer
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Rails App',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
