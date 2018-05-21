import { Directive, TemplateRef, ViewContainerRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from '../../user';
import { User } from '../../user/model/user.model';
import { PerfilUtils } from '../../user/model/perfil.model';
import { UserSessionHolder } from '../../auth';
import { UserSession } from '../../user/model/user-session.model';

@Directive({
    selector: '[habTemPerfil]'
})
export class HabTemPerfilDirective implements OnChanges {
    @Input()
    private habTemPerfil: string;
    constructor(private session: UserSessionHolder,
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef) {

    }
    ngOnChanges(changes: SimpleChanges): void {
        this.session.getSession().subscribe((session) => {
            if (session.user != null) {
              this.updateView(session);
            }
        })
    }
    private updateView(session: UserSession): void {
        this.viewContainerRef.clear();

        const temPerfil: boolean = PerfilUtils.temPerfilString(session, this.habTemPerfil);
        if (temPerfil) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }

}
