import { User } from '../user/model/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN_ROUTE } from '../login';
import { UserSession } from '../user/model/user-session.model';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../user/user.service';
import { HHAuthModule } from '.';
import { UnAuthorizedError } from './unauthorized.error';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class UserSessionHolder {

    private current: UserSession = new UserSession();
    private userSession: BehaviorSubject<UserSession> = new BehaviorSubject<UserSession>(this.current);
    constructor(private router: Router,
        private cookieService: CookieService,
        private userService: UserService) {
    }
    /**
     * Checks if the user session is valid
     * TODO Check if the token is still valid
     */
    isValid(): boolean {

        const session = this.getSession();
        return !!this.current && !!this.current.user && !!this.current.token;
    }

    getSession(): Observable<UserSession> {
        if (!this.current || !this.current.user || !this.current.token) {
            // does it exist in the local storage/cookie?
            const currentUserJson = this.cookieService.get(HHAuthModule.AUTH_TOKEN_COOKIE_NAME);
            if (currentUserJson) {
                this.current = JSON.parse(currentUserJson);
                this.userSession.next(this.current);
            }

        }
        return this.userSession;
    }

    create(user: User, token: string) {
        this.current = new UserSession();
        this.current.token = token;
        this.current.user = user;
        this.userSession.next(this.current);
        // this.userSession = of(this.current);
        // store the cookie as a json string
        this.cookieService.set(HHAuthModule.AUTH_TOKEN_COOKIE_NAME, JSON.stringify(this.current));
    }
    invalidate(): void {
        this.current = null;
        this.userSession.next(new UserSession());
        this.cookieService.delete(HHAuthModule.AUTH_TOKEN_COOKIE_NAME);

    }
    private goToLogin() {
        this.router.navigate(['/login']);
    }
}
