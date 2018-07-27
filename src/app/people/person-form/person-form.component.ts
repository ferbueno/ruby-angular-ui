import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputError } from 'projects/angular-material-form-controls/src/lib/models/input-error.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  form: FormGroup;
  errors: { [key: string]: InputError[] };
  @Output() saveEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required]
      }
    );
  }

  ngOnInit() {
    this.errors = {
      firstname: [
        {
          errorName: 'required',
          errorMessage: 'The first name is required'
        }
      ],
      lastname: [
        {
          errorName: 'required',
          errorMessage: 'The last name is required'
        }
      ]
    };
  }

  onSubmit(): void {
    this.saveEmitter.emit();
  }
}
