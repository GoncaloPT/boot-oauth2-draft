import { NgModule } from '@angular/core';
import { HHAuthService, UserSessionHolder, AuthTokenInterceptor } from '.';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
    declarations: [
    ],
    exports: [
        ],
    providers: [
        CookieService,
        HHAuthService,
        UserSessionHolder,
        UserSessionHolder
    ]
})
export class HHAuthModule {
    public static AUTH_TOKEN_COOKIE_NAME = 'CURRENT_USER_SESSION';
    public static AUTH_TOKEN_HEADER_NAME = 'x_auth_token';
};
