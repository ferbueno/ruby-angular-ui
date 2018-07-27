import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { InputError } from 'projects/angular-material-form-controls/src/lib/models/input-error.model';
import { Login } from 'src/app/models/auth/login.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  errors: { [key: string]: InputError[]};
  loading: boolean;
  @Output() loginEmitter: EventEmitter<Login> = new EventEmitter();

  constructor(private fb: FormBuilder, private store: Store<any>) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.store.pipe(select('auth')).subscribe(authData => {
      this.loading = authData.loading;
    });
    this.errors = {
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
      this.loginEmitter.emit(this.form.value);
    }
  }
}
