import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { NewAccount } from 'src/app/auth/models/new-account.model';
import { getAuthState } from 'src/app/auth/state/auth.selector';
import { State } from 'src/app/state/app.state';
import { InputError } from '@blungo/angular-material-form-controls';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  form: FormGroup;
  errors: { [key: string]: InputError[] };
  loading: boolean;
  @Output() registerEmitter: EventEmitter<NewAccount> = new EventEmitter();

  constructor(private fb: FormBuilder, private store: Store<State>) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.store.pipe(select(getAuthState)).subscribe(authData => {
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
