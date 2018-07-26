import { Component, OnInit } from '@angular/core';
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

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  ngOnInit() {
    this.errors = {
      username: [
        {
          errorName: 'required',
          errorMessage: 'El nombre de usuario es requerido'
        }
      ],
      password: [
        {
          errorName: 'required',
          errorMessage: 'La contraseña es requerida'
        }
      ]
    };
  }
}
