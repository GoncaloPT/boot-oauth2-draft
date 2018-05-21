import { User } from './user.model';
import { UserSession } from './user-session.model';

export enum PERFIL {
    ROLE_CLIENTE = 'ROLE_CLIENTE',
    ROLE_TECNICO = 'ROLE_TECNICO',
    ROLE_ADMINISTRADOR = 'ROLE_ADMINISTRADOR'
}
export class PerfilUtils {
    public static temPerfil(session: UserSession, p: PERFIL): boolean {
        return p.toString() === session.user.perfil;
    }
    public static temPerfilEm(session: UserSession, perfis: PERFIL[]): boolean {
        let temPerfil: boolean = false;
        for (let i = 0; i < perfis.length; i++) {

            let perfil = perfis[i];
            console.log("PERFIL :" , perfil);
            if (this.temPerfil(session, perfil)) {
                temPerfil = true;
                break;
            }
        }
        return temPerfil;
    }
    public static temPerfilString(session: UserSession, perfilString: string): boolean {
        let p: PERFIL = PERFIL[perfilString];
        if (!p) {
            throw new Error('Não existe nenhum perfil com o nome: ' + perfilString);
        }

        return p.toString() === session.user.perfil;
    }
}
