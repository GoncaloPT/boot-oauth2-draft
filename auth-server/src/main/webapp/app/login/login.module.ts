import { LoginComponent, LOGIN_ROUTE } from '.';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HHCommonModule } from '../common';

@NgModule({
    imports: [
        FormsModule,
        HHCommonModule
    ],
    declarations: [
        LoginComponent
    ]
})

export class HHLoginModule { };
