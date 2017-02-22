import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sp-register',
  templateUrl: './sp-register.component.html',
  styleUrls: ['./sp-register.component.css']
})

export class SPRegisterComponent{
    constructor(private router: Router){}
    navLogin(){
        this.router.navigate(['/splogin']);
    }
}