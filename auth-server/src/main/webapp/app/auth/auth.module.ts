import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TokenHolder, HHAuthService } from '.';

@NgModule({
    declarations: [
    ],
    exports: [
        ],
    providers: [
        CookieService,
        TokenHolder,
        HHAuthService
    ]
})
export class HHAuthModule {
    //public static AUTH_TOKEN_COOKIE_NAME = 'CURRENT_USER_SESSION';
    //public static AUTH_TOKEN_HEADER_NAME = 'x_auth_token';

    public static OAUTH_COOKIE_NAME = 'OAUTH_TOKEN';
};
