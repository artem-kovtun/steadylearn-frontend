import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public router: Router, private authService: AuthService) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(res => {
      this.authService.verifyAuthorization().subscribe(_ => res(true),
        _ => {
          this.router.navigate(['login']);
          res(false);
        }
      );
    });
  }

}
