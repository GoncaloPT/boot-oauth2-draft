import { LISTA_UTILIZADORES_ROUTE, DADOS_PESSOAIS_ROUTE } from './../../user/user.route';
import { Routes } from '@angular/router';
import { CenterViewComponent } from './center-view.component';
import { PERFIL } from '../../user/model/perfil.model';
import { SessionGuard } from '../../guards/session.guard';
import { APPMENU_ROUTE } from '../../app-menu/app-menu.route';

export const CenterViewRoutes: Routes = [
    {
        path: '',
        canActivate: [SessionGuard],
        canActivateChild: [SessionGuard],
        children: [

            {
                path: '',
                component: CenterViewComponent,
                children: [
                    APPMENU_ROUTE,
                    DADOS_PESSOAIS_ROUTE,
                    LISTA_UTILIZADORES_ROUTE
                ]
            }
        ]
    },

];
