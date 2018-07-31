import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputError } from 'projects/angular-material-form-controls/src/lib/models/input-error.model';
import { Person } from 'src/app/people/models/person.model';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { getPeopleState } from 'src/app/people/state/people.selectors';

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
    this.form = this.fb.group(
      {
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        age: ['', Validators.required]
      }
    );
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
