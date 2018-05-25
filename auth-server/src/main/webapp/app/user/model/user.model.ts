import { PerfilUtils } from './perfil.model';

export class User{
    public userId: number;
    public login: string;
    public firstName: string;
    public lastName: string;
    public fullName: string;
    public email: string;
    public authorities: Array<string>;  //pode ter várias?
    public perfil: PerfilUtils;
    


    constructor(userId?: number, login?: string, firstName?: string, lastName?: string,
        email?: string, authorities?: Array<string>) {
            this.userId = userId;
            this.login = login;
            this.email = email;
            this.authorities = authorities;
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = firstName + ' ' + lastName;
    }

}
