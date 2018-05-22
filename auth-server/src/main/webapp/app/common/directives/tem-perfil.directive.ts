import { Directive, TemplateRef, ViewContainerRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from '../../user';
import { User } from '../../user/model/user.model';
import { PerfilUtils } from '../../user/model/perfil.model';
import { UserSession } from '../../user/model/user-session.model';

@Directive({
    selector: '[habTemPerfil]'
})
export class HabTemPerfilDirective implements OnChanges {
    @Input()
    private habTemPerfil: string;
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef) {

    }
    ngOnChanges(changes: SimpleChanges): void {
        //todo
        this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
   

}
