import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { GetPeople, GetPerson } from 'src/app/people/state/people.actions';
import { getPeopleState } from 'src/app/people/state/people.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-table-container',
  templateUrl: './people-table-container.component.html',
  styleUrls: ['./people-table-container.component.scss']
})
export class PeopleTableContainerComponent implements OnInit {
  data: Person[] = [];
  loading: boolean;

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(new GetPeople());
    this.store.pipe(select(getPeopleState)).subscribe(peopleData => {
      this.data = peopleData.people;
      this.loading = peopleData.loadingGet;
    });
  }

  edit(id: number): void {
    this.router.navigate(['dashboard', 'people', id]);
  }
}
