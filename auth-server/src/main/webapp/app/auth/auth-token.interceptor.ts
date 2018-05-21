import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injector, Injectable, OnInit } from '@angular/core';
import { UserSessionHolder } from './user-session.holder';
/**
 * This is a request interceptor
 * It's purpose is to add the authorization token to each request
 */
@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor, OnInit {
    private token: string;

    constructor(
        private session: UserSessionHolder
    ) {
        this.session.getSession().subscribe((token) => {
            this.token = token.token;
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
            headers: req.headers.set('x_auth_token',
                this.token)
        });
        return next.handle(cloned);

    }
    /** Only accepts if the url is different from login **/
    accept(req: HttpRequest<any>): boolean {
        console.log('accept req.headers.has(x_auth_token):', req.headers.has('x_auth_token'));
        return req.url.indexOf('api') > -1 && !req.headers.has('x_auth_token');
    }
}
