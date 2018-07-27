import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {
  username: string;

  constructor(private router: Router, private store: Store<any>) {}

  ngOnInit() {
    this.store.pipe(select('auth')).subscribe(auth => {
      this.username = auth.userData.user.first_name + ' ' + auth.userData.user.last_name;
    });
  }

  logout() {
    this.router.navigate(['auth']);
  }
}
