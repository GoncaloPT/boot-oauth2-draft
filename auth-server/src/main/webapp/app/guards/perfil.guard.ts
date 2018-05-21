import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserSessionHolder } from '../auth';
import { PerfilUtils, PERFIL } from '../user/model/perfil.model';
import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class PerfilGuard<T extends PERFIL> implements CanActivate, CanActivateChild {

    constructor(private sessionHolder: UserSessionHolder,
        private router: Router,
        private toastr: ToastsManager,
        private translate: TranslateService) {

    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        let perfis: PERFIL[] | PERFIL = childRoute.data['perfil'],
            onGuardFailRedirect = childRoute.data['onGuardFailRedirect'];
        if (!perfis) {
            //childRoute nao tem perfis configurados, usar o do pai
            perfis = childRoute.parent.data['perfil'];
        }

        ;
        if (!perfis || perfis.length < 1) {
            throw 'data.perfil é obrigatório ao usar PerfilGuard! ';
        }
        return this.temPerfilPromise(perfis, onGuardFailRedirect);
    }
    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> {
        let perfis: PERFIL[] = next.data['perfil'],
            onGuardFailRedirect = next.data['onGuardFailRedirect'];
        if (!perfis || perfis.length < 1) {
            throw 'data.perfil é obrigatório ao usar PerfilGuard! ';
        }
        return this.temPerfilPromise(perfis, onGuardFailRedirect);
    }
    temPerfilPromise(perfis: PERFIL[] | PERFIL, failRedirectRoute: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let session = this.sessionHolder.getSession();
            try {
                session.subscribe((session) => {
                    if (!session.user) {
                        resolve(false);
                        return;
                    }
                    let temPerfil: boolean = false;
                    if (Array.isArray(perfis)) {
                        console.debug('é um array');
                        temPerfil = PerfilUtils.temPerfilEm(session, perfis);
                    }
                    else {
                        console.debug('não é um array');
                        temPerfil = PerfilUtils.temPerfil(session, perfis);
                    }

                    if (!temPerfil) {
                        //this.toastr.clearAllToasts();
                        this.translate.get('error.wrongProfile').subscribe((res: string) => {
                            this.toastr.error(res);
                        });

                        this.router.navigate([failRedirectRoute]);
                    }
                    resolve(temPerfil);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }
}
