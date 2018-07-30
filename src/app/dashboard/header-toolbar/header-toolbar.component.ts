import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthService } from '../../auth/services/auth.service';
import { getAuthState } from 'src/app/auth/state/auth.selector';
import { AppState } from 'src/app/models/state/app-state.model';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {
  username: string;

  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.pipe(select(getAuthState)).subscribe(auth => {
      this.username =
        auth.userData.user.first_name + ' ' + auth.userData.user.last_name;
    });
  }

  logout() {
    this.authService.logout();
  }
}
