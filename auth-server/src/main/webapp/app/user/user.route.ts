import { Route } from '@angular/router';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { PerfilGuard } from '../guards/perfil.guard';
import { PERFIL } from './model/perfil.model';


export const LISTA_CLIENTE_ROUTE: Route[] = [

    {
        path: 'lista-cliente',
        component: ListaClienteComponent,

    }
]