import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import { SPLoginComponent } from '../components/app-access/sp-login/sp-login.component';
import { SPRegisterComponent } from '../components/app-access/sp-register/sp-register.component';
import { AppAccessRoutingModule } from '../routes/app-access-routing.module';

@NgModule({
    imports: [ 
        CommonModule, 
        HttpModule,
        MaterialModule.forRoot(), 
        AppAccessRoutingModule
    ],  
    declarations: [ 
        SPLoginComponent,
        SPRegisterComponent
    ],
    providers: [ ]
})
export class AppAccessModule { }