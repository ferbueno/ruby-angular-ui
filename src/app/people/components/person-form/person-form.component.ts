import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputError } from '@blungo/angular-material-form-controls';
import { select, Store } from '@ngrx/store';
import { Person } from 'src/app/people/models/person.model';
import { getPeopleState } from 'src/app/people/state/people.selectors';
import { State } from 'src/app/state/app.state';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  loading: boolean;
  form: FormGroup;
  errors: { [key: string]: InputError[] };
  @Output() saveEmitter: EventEmitter<Person> = new EventEmitter();

  constructor(private fb: FormBuilder, private store: Store<State>) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.store.pipe(select(getPeopleState)).subscribe(peopleData => {
      this.loading = peopleData.loadingSet;
    });
    this.errors = {
      firstname: [
        {
          errorName: 'required',
          errorMessage: 'The name is required'
        }
      ],
      lastName: [
        {
          errorName: 'required',
          errorMessage: 'The last name is required'
        }
      ],
      age: [
        {
          errorName: 'required',
          errorMessage: 'The age is required'
        }
      ]
    };
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.saveEmitter.emit(this.form.value);
    }
  }
}
