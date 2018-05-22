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
                canActivate: [],
                canActivateChild: [],
                children: [
                    APPMENU_ROUTE
                ]
            }


        ]
    }
];
