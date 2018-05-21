import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../user/model/user.model';
import { UserSessionHolder } from './user-session.holder';
import { UserService } from '../user/user.service';
import { SocialUser } from 'angularx-social-login';

@Injectable()
export class HHAuthService {
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private session: UserSessionHolder
  ) {

  }


  login(credencials): Promise<User> {
    return new Promise((resolve, reject) => {
      const headers: HttpHeaders = new HttpHeaders({
        "Authorization": "Basic " + btoa("LOGIN_APP:secret"),
        "Content-Type": "application/x-www-form-urlencoded"
      });
      let body = "grant_type=password&username=silvagc&password=password";

      this.http.post('oauth/token',
        body, { headers: headers }).subscribe((response: HttpResponse<any>) => {
          console.log(response);
          resolve(null);
        }, (error) => {
          reject(error);
        });
    });
  }
}
