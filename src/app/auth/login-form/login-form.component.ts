import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputError } from 'projects/angular-material-form-controls/src/lib/models/input-error.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  errors: { [key: string]: Array<InputError> };
  @Output() loginEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      }
    );
  }

  ngOnInit() {
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
      this.loginEmitter.emit();
    }
  }
}
