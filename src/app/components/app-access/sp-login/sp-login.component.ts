//External depencies
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Services
import { RegExpService } from '../../../services/shared-information/reg-exp.service';
import { WebApiPathService } from '../../../services/shared-information/webapi-path.service';
import { LoginSpService } from '../../../services/httpCalls/login-sp.service';

//Form Validators
import { StructureValidator } from '../../../form-validators/structure.validator';

//Models
import { ServiceProviderModel } from '../../../models/service-provider.model';


@Component({
  selector: 'sp-login',
  templateUrl: './sp-login.component.html',
  styleUrls: ['./sp-login.component.css']
})

export class SPLoginComponent implements OnInit{
    loginForm: FormGroup;
    active:boolean = true;
    serviceProvider: ServiceProviderModel = new ServiceProviderModel();

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private regExpService: RegExpService,
        private webApiPathService: WebApiPathService,
        private loginSpService: LoginSpService){}

    ngOnInit(){
        this.buildForm();
    }

    navRegister(){
        this.router.navigate(['/spregister']);
    }

    buildForm(): void {
         this.loginForm = this.fb.group({
            'email':[null,[
                Validators.required,
                StructureValidator([this.regExpService.getRegExp('email').regExp])
            ]],
            'password': [null, Validators.required]
        });
    
        this.loginForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();

    }

    onValueChanged(data?: any){
        if(!this.loginForm) { return; }
        const form = this.loginForm;
        
        for(const field in this.formErrors){
            //Clear previous error messages (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if(control && control.dirty && !control.valid){
                const messages = this.validationMessages[field];
                for(const key in control.errors){
                    this.formErrors[field] = messages[key];
                }
            }
        }
    }

    formErrors = {
        'email': ''
    };

    validationMessages = {
        'email': {
            'required': '',
            'forbiddenStructure': 'Email format should be "john@doe.com".'
        }
    }

    onSubmitForm(){
        this.serviceProvider = this.loginForm.value;
        console.log(this.serviceProvider);
        this.loginSpService.authenticate(this.serviceProvider, this.webApiPathService.getWebApiPath('login-sp').path)
            .subscribe(responseSp => {
                if (responseSp.status === "success") { 
                    console.log(responseSp.message);
                    this.router.navigate(['/spregister']);
                }else{
                    console.log(responseSp.message);
                }
            }, 
            errMsg => {
                console.log(errMsg);
            });
    }
}