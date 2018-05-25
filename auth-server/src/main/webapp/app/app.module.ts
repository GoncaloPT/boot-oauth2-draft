import './vendor.ts';
import { NgModule, ViewContainerRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LOGIN_ROUTE, LoginComponent, HHLoginModule } from './login';
import { HHCommonModule } from './common';
import { RouterModule, Routes } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {
    ErrorComponent,
    errorRoute
} from './structure';
import { CenterViewComponent } from './structure/center-view/center-view.component';
import { HHAuthModule, AuthTokenInterceptor } from './auth/';
import { HHUserModule } from './user';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { CenterViewRoutes } from './structure/center-view';
import { SessionGuard } from './guards/session.guard';
import { AppMenuComponent } from './app-menu/app-menu.component';

const APP_ROUTES = [
    ...LOGIN_ROUTE,
    ...CenterViewRoutes,
    ...errorRoute,
]

@NgModule({
    imports: [
        NgbModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HHAuthModule,
        HHUserModule,
        HHCommonModule,
        HHLoginModule,
        NgbModule.forRoot(),
        ToastModule.forRoot(),
        RouterModule.forRoot(APP_ROUTES,
            { useHash: true, enableTracing: false }
        )
    ],
    declarations: [
        AppComponent,
        ErrorComponent,
        CenterViewComponent,
        AppMenuComponent,

    ],
    providers: [
        SessionGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },

    ],
    bootstrap: [
        AppComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HealthyHabitsAppModule {
};
