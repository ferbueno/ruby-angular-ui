import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Person } from 'src/app/people/models/person.model';
import { AddPerson } from 'src/app/people/state/people.actions';
import { State } from 'src/app/state/app.state';

@Component({
  selector: 'app-person-form-container',
  templateUrl: './person-form-container.component.html',
  styleUrls: ['./person-form-container.component.scss']
})
export class PersonFormContainerComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit() {}

  save(person: Person) {
    this.store.dispatch(new AddPerson(person));
  }
}
