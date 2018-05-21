import { LoginComponent } from './login.component';
import { Route } from '@angular/router';

export const LOGIN_ROUTE: Route[] = [{
    path: 'login',
    children: [
        { path: '', component: LoginComponent }
    ]
}]
