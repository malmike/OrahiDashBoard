//External modules and dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule  } from '@angular/forms';
import 'hammerjs';

//Components
import { SPLoginComponent } from '../components/app-access/sp-login/sp-login.component';
import { SPRegisterComponent } from '../components/app-access/sp-register/sp-register.component';

//Routing Modules
import { AppAccessRoutingModule } from '../routes/app-access-routing.module';

//Services
import { AppCategoryService } from '../services/shared-information/app-categories.service';
import { RegExpService } from '../services/shared-information/reg-exp.service';
import { WebApiPathService } from '../services/shared-information/webapi-path.service';
import { RegisterSpService } from '../services/httpCalls/register-sp.service';
import { LoginSpService } from '../services/httpCalls/login-sp.service';

@NgModule({
    imports: [ 
        CommonModule, 
        HttpModule,
        ReactiveFormsModule ,
        MaterialModule.forRoot(), 
        AppAccessRoutingModule
    ],  
    declarations: [ 
        SPLoginComponent,
        SPRegisterComponent
    ],
    providers: [
        AppCategoryService,
        RegExpService,
        WebApiPathService,
        RegisterSpService,
        LoginSpService
     ]
})
export class AppAccessModule { }