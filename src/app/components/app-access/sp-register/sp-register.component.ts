//External depencies
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { MouseEvent } from "angular2-google-maps/core";


//Services
import { AppCategoryService } from '../../../services/shared-information/app-categories.service';
import { RegExpService } from '../../../services/shared-information/reg-exp.service';
import { WebApiPathService } from '../../../services/shared-information/webapi-path.service';
import { RegisterSpService } from '../../../services/httpCalls/register-sp.service';

//Models
import { ServiceProviderModel } from '../../../models/service-provider.model';
import { LocationModel } from '../../../models/location.model';

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
    location: LocationModel;

    lat: number = 1.277328;
    lng: number = 32.389984;

    custom_lat: number = 0;
    custom_lng: number = 0;
    
    setPosition(position){
        console.log(position);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        console.log(this.lat+"-"+this.lng);
    }

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private appCategoryService: AppCategoryService,
        private regExpService: RegExpService,
        private webApiPathService: WebApiPathService,
        private registerSpService: RegisterSpService,
        private snackBar: MdSnackBar
    ){}

    ngOnInit(){
        this.getCurrentLocation();
        this.getCategories();
        this.buildForm();
    }

    mapClicked($event: MouseEvent) {
        this.custom_lat = $event.coords.lat;
        this.custom_lng = $event.coords.lng;
        console.log(this.custom_lat+"-"+this.custom_lng);
    }

    getCurrentLocation(){
        if(!!navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
        } else {
            console.log('Geo Location not supported by this browser');
        }
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
        if((this.custom_lat !== 0 && this.custom_lng !== 0)){
            let location = new LocationModel(
                this.custom_lat, this.custom_lng
            );
            this.serviceProvider.location = location;
        }
        
        console.log(this.serviceProvider);
        this.registerSpService.register(this.serviceProvider, this.webApiPathService.getWebApiPath('register-sp').path)
            .subscribe(responseSp => {
                if (responseSp.status === "success") { 
                    console.log(responseSp.message);
                    this.snackBar.open(responseSp.message, '', {
                        duration: 2000,
                    });
                    this.router.navigate(['/splogin']);
                }else{
                    this.snackBar.open(responseSp.message, '', {
                        duration: 2000,
                    });
                    console.log(responseSp.message);
                }
            }, 
            errMsg => {
                this.snackBar.open(errMsg, '', {
                        duration: 2000,
                });
                console.log(errMsg);
            });
    }
}
