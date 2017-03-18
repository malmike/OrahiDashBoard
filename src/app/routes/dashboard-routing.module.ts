import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppNavComponent } from '../components/app-navigation/app-nav.component';
import { DashBoardComponent } from '../components/dashboard/dashboard.component';
import { AddServiceComponent } from '../components/sp-services/add-service/add-service.component';
import { AddCategoryComponent } from '../components/sp-services/add-category/add-category.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component:AppNavComponent,
      children:[
        { path: '', redirectTo:'dashboard', pathMatch: 'full'},
        { path: 'dashboard', component:DashBoardComponent },
        { path: 'addservice', component:AddServiceComponent },
        { path: 'addservicecategory', component:AddCategoryComponent }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class DashBoardRoutingModule {}

