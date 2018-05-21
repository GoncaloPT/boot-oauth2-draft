import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HHAuthService } from '../auth/';
import { User } from '../user/model/user.model';
import { Credencials } from '../user/model/credencials.model';

@Component({
    selector: 'hab-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    authenticationError: boolean;
    showAuthError: boolean;
    credencials: Credencials;
    loading = false;
    constructor(private authService: HHAuthService,
        private router: Router) {
        this.credencials = new Credencials();
    }
    ngOnInit() {
        this.credencials = new Credencials();
        // this.credencials.email = 'ramoscc.joao@gmail.com';
        // this.credencials.password = 'hello';

      
    }
    onLogin() {
        this.loading = true;
        this.authService.login(this.credencials).then(this.loginSuccess).catch(this.loginError);

    }
    private loginSuccess = (user: User) => {
        console.log('hello');
        this.router.navigate(['/']);
        this.loading = false;
    };
    private loginError = (err) => {
        console.log('err: ', err);
        this.authenticationError = this.showAuthError = true;
        this.loading = false;
    };

    goToRegisto() {
        this.router.navigate(['/registo']);
    }
 
}
