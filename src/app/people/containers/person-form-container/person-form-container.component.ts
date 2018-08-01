import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Person } from 'src/app/people/models/person.model';
import {
  AddPerson,
  GetPerson,
  UpdatePerson
} from 'src/app/people/state/people.actions';
import { State } from 'src/app/state/app.state';
import {
  getPeopleState,
  getCurrentPerson
} from 'src/app/people/state/people.selectors';
import { PersonFormComponent } from 'src/app/people/components/person-form/person-form.component';
import { filter, tap, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { PeopleState } from 'src/app/people/state';

@Component({
  selector: 'app-person-form-container',
  templateUrl: './person-form-container.component.html',
  styleUrls: ['./person-form-container.component.scss']
})
export class PersonFormContainerComponent implements OnInit, AfterViewInit {
  @ViewChild(PersonFormComponent) personFormComponent: PersonFormComponent;
  loading: boolean;
  isEditing: boolean;
  id: number;
  constructor(private store: Store<State>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store
      .pipe(select(getPeopleState))
      .subscribe((state: PeopleState) => (this.loading = state.loadingGet));
    this.route.params
      .pipe(
        filter(params => params.id),
        map(params => params.id)
      )
      .subscribe(id => {
        this.id = id;
        this.store.dispatch(new GetPerson(id));
      });
  }

  ngAfterViewInit() {
    this.store
      .pipe(
        select(getCurrentPerson),
        filter(value => !!value)
      )
      .subscribe((currentPerson: Person) => {
        currentPerson.lastName = currentPerson.last_name;
        this.isEditing = true;
        this.personFormComponent.form.patchValue(currentPerson);
      });
  }

  save(person: Person) {
    this.isEditing
      ? this.store.dispatch(new UpdatePerson({ ...person, id: this.id }))
      : this.store.dispatch(new AddPerson(person));
  }
}
