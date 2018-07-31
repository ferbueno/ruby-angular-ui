import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Login } from 'src/app/auth/models/login.model';
import { LoginAction } from 'src/app/auth/state/auth.actions';
import { getUserState } from 'src/app/auth/state/auth.selector';
import { State } from 'src/app/state/app.state';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {
  constructor(private router: Router, private store: Store<State>) {}

  ngOnInit() {
    this.store.pipe(select(getUserState)).subscribe(() => {
      this.router.navigate(['dashboard']);
    });
  }

  login(login: Login) {
    this.store.dispatch(new LoginAction(login));
  }
}
