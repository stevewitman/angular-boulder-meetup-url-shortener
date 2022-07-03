import { Component, OnInit } from '@angular/core';

import { User } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  userAuthStatus$: Observable<User | null> = of(null);

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userAuthStatus$ = this.authService.getUserAuthState();
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle();
  }

  signOutWithGoogle() {
    this.authService.signOutWithGoogle();
  }
}
