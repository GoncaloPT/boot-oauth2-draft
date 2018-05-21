import { NgModule, LOCALE_ID, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AuthTokenInterceptor } from '../auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HabTemPerfilDirective } from './directives/tem-perfil.directive';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        HabTemPerfilDirective
    ],
    exports: [
        BrowserAnimationsModule,
        CommonModule,
        RouterModule,
        NgbModule,
        HabTemPerfilDirective
    ],
    providers: [
        AuthTokenInterceptor
    ]
})
export class  HHCommonModule { }
