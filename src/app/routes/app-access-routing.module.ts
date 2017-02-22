import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SPLoginComponent } from '../components/app-access/sp-login/sp-login.component';
import { SPRegisterComponent } from '../components/app-access/sp-register/sp-register.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'splogin', component: SPLoginComponent},
    { path: 'spregister', component: SPRegisterComponent}
  ])],
  exports: [RouterModule]
})
export class AppAccessRoutingModule {}

