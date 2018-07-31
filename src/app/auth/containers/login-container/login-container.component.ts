import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login } from 'src/app/auth/models/login.model';
import { LoginAction } from 'src/app/auth/state/auth.actions';
import { State } from 'src/app/state/app.state';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit() {}

  login(login: Login) {
    this.store.dispatch(new LoginAction(login));
  }
}
