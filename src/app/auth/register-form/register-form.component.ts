import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputError } from 'projects/angular-material-form-controls/src/lib/models/input-error.model';
import { NewAccount } from 'src/app/models/auth/new-account.model';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  form: FormGroup;
  errors: { [key: string]: InputError[]};
  loading: boolean;
  @Output() registerEmitter: EventEmitter<NewAccount> = new EventEmitter();

  constructor(private fb: FormBuilder, private store: Store<any>) {
    this.form = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      }
    );
  }

  ngOnInit() {
    this.store.pipe(select('auth')).subscribe(authData => {
      this.loading = authData.loading;
    });
    this.errors = {
      firstName: [
        {
          errorName: 'required',
          errorMessage: 'The first name is required'
        }
      ],
      lastName: [
        {
          errorName: 'required',
          errorMessage: 'The last name is required'
        }
      ],
      email: [
        {
          errorName: 'required',
          errorMessage: 'The email is required'
        },
        {
          errorName: 'email',
          errorMessage: 'Incorrect email format'
        }
      ],
      password: [
        {
          errorName: 'required',
          errorMessage: 'The password is required'
        }
      ]
    };
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.registerEmitter.emit(this.form.value);
    }
  }
}
