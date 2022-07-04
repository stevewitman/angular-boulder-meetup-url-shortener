import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.scss'],
})
export class NavMainComponent implements OnInit {
  userAuthStatus$: Observable<User | null> = of(null);

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userAuthStatus$ = this.authService.getUserAuthState();
  }
}
