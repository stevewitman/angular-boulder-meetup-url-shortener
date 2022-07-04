import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { catchError, map, Observable, of } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.userAuthState$.pipe(
      map((e) => {
        if (e) {
          return true;
        } else {
          this.router.navigate(['/notauthorized']);
          return false;
        }
      }),
      catchError((err) => {
        this.router.navigate(['/notauthorized']);
        return of(false);
      })
    );
  }
}
