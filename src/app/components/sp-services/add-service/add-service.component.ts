//External depencies
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';
import { MouseEvent } from "angular2-google-maps/core";
 

//Services
import { AppCategoryService } from '../../../services/shared-information/app-categories.service';
import { RegExpService } from '../../../services/shared-information/reg-exp.service';
import { WebApiPathService } from '../../../services/shared-information/webapi-path.service';
import { AddServiceService } from '../../../services/httpCalls/add-service.service';
import { GetServiceCategoryService } from '../../../services/httpCalls/get-service-category.service';

//Models
import { ServiceModel } from '../../../models/service.model';
import { ContactModel } from '../../../models/contact.model';
import { ServiceCategoryModel } from '../../../models/service-category.model';
import { LocationModel } from '../../../models/location.model';

//Form Validators
import { CompareItemsValidator } from '../../../form-validators/compare-items.validator';
import { StructureValidator } from '../../../form-validators/structure.validator';


@Component({
  selector: 'add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})

export class AddServiceComponent implements OnInit{
    categoryList: Array<any>;
    service: ServiceModel = new ServiceModel();
    addServiceForm: FormGroup;
    active:boolean = true;
    provePassword: string;
    token:string
    contact: ContactModel;
    contactEmailError: string;
    contactPhoneNumberError: string;
    contactNameError: string;
    allowSubmit: boolean = false;
    serviceCategoryList: Array<ServiceCategoryModel> = new Array<ServiceCategoryModel>();
    controlOnline: boolean = false;
    data: any;
    cropperSettings: CropperSettings;
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
    
    
    @ViewChild('cropper', undefined) 
    cropper:ImageCropperComponent;


    constructor(
        private fb: FormBuilder,
        private router: Router,
        private appCategoryService: AppCategoryService,
        private regExpService: RegExpService,
        private webApiPathService: WebApiPathService,
        private addServiceService: AddServiceService,
        private getServiceCategory: GetServiceCategoryService,
        private snackBar: MdSnackBar
    ){
        this.cropperSettings = new CropperSettings();
        this.cropperSettings.width = 100;
        this.cropperSettings.height = 100;
        this.cropperSettings.croppedWidth =100;
        this.cropperSettings.croppedHeight = 100;
        this.cropperSettings.canvasWidth = 400;
        this.cropperSettings.canvasHeight = 300;
 
        this.data = {};
    }

    ngOnInit(){
        this.getCurrentLocation();
        this.getCategories();
        this.getToken();
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

    getToken(){
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser.token;
        console.log(this.token);
        this.getServiceCategoryList();
    }

    getCategories(){
        this.appCategoryService.getCategories().then(categories => this.categoryList = categories);
    }

    getServiceCategoryList(){
        this.getServiceCategory.getServiceCategory( this.webApiPathService.getWebApiPath('get-service-category').path, this.token)
        .subscribe(response => {
            if(response){
                this.serviceCategoryList = this.getServiceCategory.getServiceCategoryList();
                this.serviceCategoryList.push(
                    {'_id':'', 'name':'None'}
                );
            }else{
                this.snackBar.open('No service caltegories exist', '', {
                        duration: 2000,
                });
            }
        }, 
        errMsg => {
            this.snackBar.open(errMsg, '', {
                duration: 2000,
            });
            console.log(errMsg);
        });
    }

    fileChangeListener($event) {
        var image:any = new Image();
        var file:File = $event.target.files[0];
        var myReader:FileReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent:any) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
    
        };
    
        myReader.readAsDataURL(file);
    }

     buildForm(): void {
         this.addServiceForm = this.fb.group({
            'category': [null],
            'name': [null, [
                Validators.required,
                Validators.minLength(4)
            ]],
            'description':[null],
            'trailer': [null],
            'contact': this.fb.group({
                'name': [null,
                    Validators.minLength(4)
                ],
                'email': [null, 
                    Validators.pattern(this.regExpService.getRegExp('email').regExp)
                ],
                'phoneNumber': [null,
                    StructureValidator([
                        this.regExpService.getRegExp('phone1').regExp,
                        this.regExpService.getRegExp('phone2').regExp])
                ]
            }),
            'online': [null],
            'rate':[null]        
        });
    
        this.addServiceForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();

    }

    onValueChanged(data?: any){
        if(!this.addServiceForm) { return; }
        const form = this.addServiceForm;
        
        let contactName = form.get('contact.name');
        if(contactName && contactName.dirty && contactName.errors){
            this.contactNameError = 'Name must be at least 4 characters long.';
        }else{
            this.contactNameError = ''; 
        }

        let contactEmail = form.get('contact.email');
        if(contactEmail && contactEmail.dirty && contactEmail.errors){
            this.contactEmailError = 'Email format should be "john@doe.com".';
        }else{
            this.contactEmailError = ''; 
        }

        let contactPhoneNumber = form.get('contact.phoneNumber');
        if(contactPhoneNumber && contactPhoneNumber.dirty && contactPhoneNumber.getError('forbiddenStructure')){
            this.contactPhoneNumberError = 'Contact format should be "0701234567" or "+256701234567"';
        }else{
            this.contactPhoneNumberError = '';
        }

        for(const field in this.formErrors){

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
        'name': ''
    };

    validationMessages = {
        'name': {
            'required': 'Name is required.',
            'minlength': 'Name must be at least 4 characters long.'
        }
    }

    onSubmitForm(){
        let jsonService = JSON.parse(JSON.stringify(this.addServiceForm.value));
        
        if(this.data.image) jsonService['image1'] = this.data.image;
        if((this.custom_lat !== 0 && this.custom_lng !== 0)){
            let location = new LocationModel(
                this.custom_lat, this.custom_lng
            );
            jsonService['location'] = location;
        }
        
        for(var item in jsonService){
            if(jsonService[item] === null)
                delete jsonService[item];
            
            if(item === 'category'){
                if(jsonService.hasOwnProperty(item)){
                    jsonService["inCategory"] = true;
                }
            }
            
            if(item === 'contact'){
                let allNull:boolean = true;
                for(var contactItem in jsonService[item]){
                    if(jsonService[item][contactItem] === null){
                        delete jsonService[item][contactItem];
                    }else{
                        allNull = false;
                    }
                }
                if(allNull){
                    delete jsonService[item];
                }
            }

        }
        this.service = jsonService;
        console.log(this.service);

        this.addServiceService.addService(this.service, this.webApiPathService.getWebApiPath('add-service').path, this.token)
            .subscribe(responseSp => {
                if (responseSp.status === "success") { 
                    console.log(responseSp.message);
                    this.snackBar.open(responseSp.message, '', {
                        duration: 2000,
                    });
                    this.router.navigate(['/nav/dashboard']);
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
