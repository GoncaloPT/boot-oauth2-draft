import { Routes } from '@angular/router';
import { CenterViewComponent } from './center-view.component';
import { SessionGuard } from '../../guards/session.guard';
import { PERFIL } from '../../user/model/perfil.model';
import { PerfilGuard } from '../../guards/perfil.guard';

export const CenterViewRoutes: Routes = [
    {
        path: '',
        canActivate: [SessionGuard],
        canActivateChild: [SessionGuard],
        children: [
           
            {
                path: '',
                component: CenterViewComponent,
                canActivate: [PerfilGuard],
                canActivateChild: [PerfilGuard],
                data: {
                    perfil: [
                        PERFIL.ROLE_CLIENTE,
                        PERFIL.ROLE_TECNICO
                    ],
                },
                children: [
                ]
            }
          

        ]
    }
];
