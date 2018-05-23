import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injector, Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TokenHolder } from '.';

/**
 * This is a request interceptor
 * It's purpose is to add the authorization token to each request
 */
@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor, OnInit {
    private token: string;

    constructor(
         private tokenHolder: TokenHolder
    ) {
       this.tokenHolder.getToken().subscribe( oAuthToken => {
           this.token = oAuthToken.scope + ' ' + oAuthToken.accessToken;
       })
    }
    // Isto nao corre, vai-se la saber porque...
    ngOnInit() {
        /*  this.session.getSession().subscribe(session => {
             this.token = session.token;
         }); */
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.accept(req) || !this.token) {
            return next.handle(req);
        }

        const cloned = req.clone({
            headers: req.headers.set('authorization',
                this.token)
        });
        return next.handle(cloned);

    }
    /** Only accepts if the url is different from login **/
    accept(req: HttpRequest<any>): boolean {
        console.log('accept req.headers.has(authorization):', req.headers.has('authorization'));
        return req.url.indexOf('api') > -1 && !req.headers.has('authorization');
    }
}
