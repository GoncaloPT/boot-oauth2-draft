import { UserService } from './../user.service';
import { OnInit, Component } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { TokenHolder } from '../../auth';

@Component({
    selector: 'hab-dados-pessoais',
    templateUrl: './dados-pessoais.component.html',
    styles: []
})
export class DadosPessoaisComponent implements OnInit {

    // public currentUser: User;
    public currentUser: User = new User(1, 'silvagc', 'Gonçalo', 'Silva', 'go.silva@cgi.com', ['Admin', 'User'])

    constructor(private uService: UserService) {

    }

    ngOnInit(): void {
        console.log('init');
        // this.carregarDados();
    }

    carregarDados() {
        this.uService.getCurrent().then((user: User) => {
            this.currentUser = user;
        })
    }
}
