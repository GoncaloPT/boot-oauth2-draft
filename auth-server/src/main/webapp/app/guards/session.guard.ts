import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ToastsManager } from 'ng2-toastr';
import { CookieService } from 'ngx-cookie-service';
import { HHAuthModule } from '../auth/auth.module';

@Injectable()
export class SessionGuard implements CanActivate, CanActivateChild {
  constructor(private cookieService: CookieService,
    private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let oauthToken = this.cookieService.get(HHAuthModule.OAUTH_COOKIE_NAME);
    console.log('SessionGuard token: ', oauthToken);
    if (!oauthToken) {
      console.log('invalid session, going to login');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let oauthToken = this.cookieService.get(HHAuthModule.OAUTH_COOKIE_NAME);

    if (!oauthToken) {
      console.log('invalid session, going to login');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
