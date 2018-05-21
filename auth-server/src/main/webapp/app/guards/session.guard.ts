import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserSessionHolder } from '../auth';
import { ToastsManager } from 'ng2-toastr';

@Injectable()
export class SessionGuard implements CanActivate, CanActivateChild {
  constructor(private sessionHolder: UserSessionHolder,
    private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let validSession = this.sessionHolder.isValid();
    if (!validSession) {
      console.log('invalid session, going to login');
      this.router.navigate(['/login'])
    }
    return validSession;
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let validSession = this.sessionHolder.isValid();
    if (!validSession) {
      console.log('invalid session, going to login');
      this.router.navigate(['/login'])
    }
    return validSession;
  }
}
