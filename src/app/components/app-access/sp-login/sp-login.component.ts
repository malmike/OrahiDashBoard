import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sp-login',
  templateUrl: './sp-login.component.html',
  styleUrls: ['./sp-login.component.css']
})

export class SPLoginComponent{
    constructor(private router: Router){}
    navRegister(){
        this.router.navigate(['/spregister']);
    }
}