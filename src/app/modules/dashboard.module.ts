//External modules and dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule  } from '@angular/forms';
import 'hammerjs';

//Components

//Routing Modules
import { DashBoardRoutingModule } from '../routes/dashboard-routing.module';

//Services

@NgModule({
    imports: [ 
        CommonModule, 
        HttpModule,
        ReactiveFormsModule ,
        MaterialModule.forRoot(), 
        DashBoardRoutingModule
    ],  
    declarations: [ 
    ],
    providers: [
     ]
})
export class AppAccessModule { }