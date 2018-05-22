/** 
 * Provides token related information, 
 * uses Observers for that
 */

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'
import { BehaviorSubject } from 'rxjs';
import { HHAuthModule, OAuthTokenResponse } from './';
import { UserService } from '../user/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class TokenHolder {

    private current: OAuthTokenResponse = new OAuthTokenResponse();
    private tokenSubject:  BehaviorSubject<OAuthTokenResponse> = new BehaviorSubject<OAuthTokenResponse>(this.current);
    constructor(private router: Router,
        private cookieService: CookieService,
        private userService: UserService) {
    }

    isValid(): boolean {

        const session = this.getToken();
        return !!this.current && !!this.current.accessToken && !!this.current.username;
    }
    getToken(): Observable<OAuthTokenResponse>{
        if (!this.current || !this.current.accessToken || !this.current.username) {
            // does it exist in the local storage/cookie?
            const currentUserJson = this.cookieService.get(HHAuthModule.OAUTH_COOKIE_NAME);
            if (currentUserJson) {
                this.current = JSON.parse(currentUserJson);
                this.tokenSubject.next(this.current);
            }

        }
        return this.tokenSubject;
    }
    create(token: OAuthTokenResponse) {
        this.current = token
        this.tokenSubject.next(this.current);
        // this.userSession = of(this.current);
        // store the cookie as a json string
        this.cookieService.set(HHAuthModule.OAUTH_COOKIE_NAME, JSON.stringify(this.current));
    }
    invalidate(): void {
        this.current = null;
        this.tokenSubject.next(new OAuthTokenResponse());
        this.cookieService.delete(HHAuthModule.OAUTH_COOKIE_NAME);
    }
    private goToLogin() {
        this.router.navigate(['/login']);
    }
}