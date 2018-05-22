import { NgModule } from "@angular/core";
import { UserService } from "./user.service";
import { HHCommonModule } from '../common';
import { FormsModule } from "@angular/forms";
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
        UserService
    ]
})
export class HHUserModule { }
