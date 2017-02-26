//External depencies
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Services
import { AppCategoryService } from '../../../services/shared-information/app-categories.service';
import { RegExpService } from '../../../services/shared-information/reg-exp.service';
import { WebApiPathService } from '../../../services/shared-information/webapi-path.service';
import { RegisterSpService } from '../../../services/httpCalls/register-sp.service';

//Models
import { ServiceProviderModel } from '../../../models/service-provider.model';

//Form Validators
import { CompareItemsValidator } from '../../../form-validators/compare-items.validator';
import { StructureValidator } from '../../../form-validators/structure.validator';


@Component({
  selector: 'sp-register',
  templateUrl: './sp-register.component.html',
  styleUrls: ['./sp-register.component.css']
})

export class SPRegisterComponent implements OnInit{
    categoryList: Array<any>;
    serviceProvider: ServiceProviderModel = new ServiceProviderModel();
    registrationForm: FormGroup;
    active:boolean = true;
    provePassword: string;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private appCategoryService: AppCategoryService,
        private regExpService: RegExpService,
        private webApiPathService: WebApiPathService,
        private registerSpService: RegisterSpService
    ){}

    ngOnInit(){
        this.getCategories();
        this.buildForm();
    }

    getCategories(){
        this.appCategoryService.getCategories().then(categories => this.categoryList = categories);
    }
    
    navLogin(){
        this.router.navigate(['/splogin']);
    }

     buildForm(): void {
         this.registrationForm = this.fb.group({
            'serviceType': [null,
                Validators.required
            ],
            'name': [null, [
                Validators.required,
                Validators.minLength(4)
            ]],
            'email':[null,[
                Validators.required,
                StructureValidator([this.regExpService.getRegExp('email').regExp])
            ]],
            'sno': [null,[
                Validators.required,
                Validators.minLength(6)
            ]],
            'contact': [null, [
                Validators.required,
                StructureValidator([
                    this.regExpService.getRegExp('phone1').regExp,
                    this.regExpService.getRegExp('phone2').regExp])
            ]],
            'password': [null, [
                Validators.required,
                Validators.minLength(6)
            ]],
            'confirmPassword': [null, [
                Validators.required
            ]]
        },
        {validator: CompareItemsValidator('password', 'confirmPassword')});
    
        this.registrationForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();

    }

    onValueChanged(data?: any){
        if(!this.registrationForm) { return; }
        const form = this.registrationForm;

        // if(form.get('password').value !== null)
        //     this.provePassword = form.get('password').value;

        let confirmPassword = form.get('confirmPassword');
        if(confirmPassword && confirmPassword.dirty &&
            this.registrationForm.getError('mismatchedItems')){
            this.provePassword = "Passwords do not match";
            
        }else{
            this.provePassword = null;
        }
        
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
        'serviceType': '',
        'name': '',
        'email': '',
        'sno': '',
        'contact': '',
        'password': '',
        'confirmPassword':''
    };

    validationMessages = {
        'serviceType': {
            'required': 'ServiceType is required.'
        },
        'name': {
            'required': 'Name is required.',
            'minlength': 'Name must be at least 4 characters long.'
        },
        'email': {
            'required': 'Email is required.',
            'forbiddenStructure': 'Email format should be "john@doe.com".'
        },
        'sno': {
            'required': 'License Trading Number is required.',
            'minlength': 'License Trading Number must be at least 6 characters long.'
        },
        'contact': {
            'required': 'Contact is required.',
            'forbiddenStructure': 'Contact format should be "0701234567" or "+256701234567"'
        },
        'password': {
            'required': 'Password is required.',
            'minlength': 'Password must be at least 6 characters long.'
        },
        'confirmPassword': {
            'mismatchedItems':'Passwords do not match'
        }
    }

    onSubmitForm(){
        this.serviceProvider = this.registrationForm.value;
        console.log(this.serviceProvider);
        this.registerSpService.register(this.serviceProvider, this.webApiPathService.getWebApiPath('register-sp').path)
            .subscribe(responseSp => {
                if (responseSp.status === "success") { 
                    console.log(responseSp.message);
                    this.router.navigate(['/splogin']);
                }else{
                    console.log(responseSp.message);
                }
            }, 
            errMsg => {
                console.log(errMsg);
            });
    }
}
