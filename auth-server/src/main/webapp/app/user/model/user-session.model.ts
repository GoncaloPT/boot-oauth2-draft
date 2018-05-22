import { User } from './user.model';
import { OAuthTokenResponse } from '../../auth/oauth-response';
export class UserSession {
    public user: User;
    public token: OAuthTokenResponse;
    constructor() {
    }
}
