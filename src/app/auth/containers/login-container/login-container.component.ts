import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginAction } from 'src/app/auth/state/auth.actions';
import { Login } from 'src/app/models/auth/login.model';
import { AppState } from 'src/app/models/state/app-state.model';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  login(login: Login) {
    this.store.dispatch(new LoginAction(login));
  }
}
