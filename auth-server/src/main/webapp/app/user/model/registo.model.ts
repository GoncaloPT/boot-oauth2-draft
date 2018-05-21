import { User } from './user.model';

export class RegistoModel extends User {
    public password: String;

    constructor(
        password?: String,
        ) {
        super();
    }
}
