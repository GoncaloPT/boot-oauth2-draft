import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../user/model/user.model';
import { UserService } from '../user/user.service';
import { CookieService } from 'ngx-cookie-service';
/* import { HHAuthModule, OAuthTokenResponse } from './'; */
import { TokenHolder } from './token.holder';
import { OAuthTokenResponse } from './oauth-response';



@Injectable()
export class HHAuthService {
  constructor(
    private http: HttpClient,
    private userService: UserService
    ,
    private tokenHolder: TokenHolder
  ) {

  }


  login(credencials): Promise<User> {
    return new Promise((resolve, reject) => {
      const headers: HttpHeaders = new HttpHeaders({
        "Authorization": "Basic " + btoa("LOGIN_APP:secret"),
        "Content-Type": "application/x-www-form-urlencoded"
      });

      let body = "grant_type=password&username={username}&password={password}";
      //body.replace("{username}", credencials.username);
      body = body.replace("{username}", "silvagc");
      //body.replace("{password}", credencials.password);
      body = body.replace("{password}", "password");
      this.http.post('oauth/token',
        body, { headers: headers }).subscribe((response: OAuthTokenResponse) => {
          console.log(response);
          this.tokenHolder.create(response);
          resolve(null);
        }, (error) => {
          reject(error);
        });
    });
  }
  logout(): void {
    this.tokenHolder.invalidate();
  }
}
