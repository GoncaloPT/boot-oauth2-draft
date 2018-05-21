import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import { UserSessionHolder } from "../../auth";

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    constructor(private session: UserSessionHolder) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).catch((error,caught)=>{

            if(error.status === 401){
                // invalid token, should login again
                this.session.invalidate();
            }

            //return the error to the method that called it
            return Observable.throw(error);
        });
    }
}