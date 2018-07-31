import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { GetPeople } from 'src/app/people/state/people.actions';
import { getPeopleState } from 'src/app/people/state/people.selectors';

@Component({
  selector: 'app-people-table-container',
  templateUrl: './people-table-container.component.html',
  styleUrls: ['./people-table-container.component.scss']
})
export class PeopleTableContainerComponent implements OnInit {
  data: Person[] = [];

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(new GetPeople());
    this.store.pipe(select(getPeopleState)).subscribe(peopleData => {
      this.data = peopleData.people;
    });
  }
}
