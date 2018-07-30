import { Component, OnInit } from '@angular/core';
import { NewAccount } from '../../models/new-account.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  register(newAccount: NewAccount) {
    this.authService.register(newAccount).subscribe(() => {
      const message = 'Su cuenta ha sido creada con éxito';
      const action = 'Ok';
      this.snackBar.open(message, action, {
        duration: 3000
      });
      this.router.navigateByUrl('auth/login');
    });
  }
}
