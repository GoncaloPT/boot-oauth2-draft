import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { ListaUtilizadoresComponent } from './lista-utilizadores/lista-utilizadores.component';
import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { HHCommonModule } from '../common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        HHCommonModule,
        FormsModule
    ],
    declarations: [
        ListaUtilizadoresComponent,
        DadosPessoaisComponent
    ],
    providers: [
        UserService
    ]
})
export class HHUserModule { }
