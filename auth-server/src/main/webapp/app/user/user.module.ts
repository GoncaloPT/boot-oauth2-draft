import { NgModule } from "@angular/core";
import { UserService } from "./user.service";
import { HHCommonModule } from '../common';
import { FormsModule } from "@angular/forms";
import { UserSessionHolder } from "../auth";
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';

@NgModule({
    imports: [
        HHCommonModule,
        FormsModule
    ],
    declarations: [
        ListaClienteComponent
    ],
    providers: [
        UserService,
        UserSessionHolder
    ]
})
export class HHUserModule { }
