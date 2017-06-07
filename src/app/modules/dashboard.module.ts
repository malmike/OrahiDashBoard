//External modules and dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule  } from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';
import 'hammerjs';

//External components
import { ImageCropperComponent } from 'ng2-img-cropper';

//Modules
import { DataTableModule } from "angular2-datatable";

//Components
import { DashBoardComponent } from '../components/dashboard/dashboard.component';
import { AppNavComponent } from '../components/app-navigation/app-nav.component';
import { AddServiceComponent } from '../components/sp-services/add-service/add-service.component';
import { AddCategoryComponent } from '../components/sp-services/add-category/add-category.component';
import { SpReceiptsComponent } from '../components/sp-receipts/sp-receipts.component';

//Routing Modules
import { DashBoardRoutingModule } from '../routes/dashboard-routing.module';

//Services
import { NavMenuService } from '../services/shared-information/nav-menu.service';
import { AddServiceService } from '../services/httpCalls/add-service.service';
import { AddServiceCategoryService } from '../services/httpCalls/add-service-category.service';
import { GetServiceCategoryService } from '../services/httpCalls/get-service-category.service';
import { GetReceiptsService } from '../services/httpCalls/get-receipts.service';

@NgModule({
    imports: [ 
        CommonModule, 
        HttpModule,
        ReactiveFormsModule ,
        MaterialModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCWWwrRN2N09Qt5TtJQTQi-4i0bi10LMSE'
        }),
        DataTableModule,
        DashBoardRoutingModule
    ],  
    declarations: [ 
        AppNavComponent,
        DashBoardComponent,
        AddServiceComponent,
        AddCategoryComponent,
        ImageCropperComponent,
        SpReceiptsComponent
    ],
    providers: [
        NavMenuService,
        AddServiceService,
        AddServiceCategoryService,
        GetServiceCategoryService,
        GetReceiptsService
    ],
    bootstrap: [AppNavComponent]
})
export class DashBoardModule { }