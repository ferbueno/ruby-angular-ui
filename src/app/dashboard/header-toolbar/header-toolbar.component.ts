import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {
  title: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['auth']);
  }
}
