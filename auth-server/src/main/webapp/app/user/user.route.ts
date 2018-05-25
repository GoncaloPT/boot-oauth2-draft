import { Route } from '@angular/router';
import { PERFIL } from './model/perfil.model';
import { ListaUtilizadoresComponent } from './lista-utilizadores/lista-utilizadores.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';


export const LISTA_UTILIZADORES_ROUTE: Route = {
        path: 'lista-utilizadores',
        component: ListaUtilizadoresComponent,
}

export const DADOS_PESSOAIS_ROUTE: Route =  {
        path: 'dados-pessoais',
        component: DadosPessoaisComponent
}
