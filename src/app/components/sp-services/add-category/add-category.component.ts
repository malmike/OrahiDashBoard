//External depencies
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';


//Services
import { AppCategoryService } from '../../../services/shared-information/app-categories.service';
import { RegExpService } from '../../../services/shared-information/reg-exp.service';
import { WebApiPathService } from '../../../services/shared-information/webapi-path.service';
import { AddServiceCategoryService } from '../../../services/httpCalls/add-service-category.service';

//Models
import { ServiceCategoryModel } from '../../../models/service-category.model';

//Form Validators
import { CompareItemsValidator } from '../../../form-validators/compare-items.validator';
import { StructureValidator } from '../../../form-validators/structure.validator';


@Component({
  selector: 'add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent implements OnInit{
    addServiceCategoryForm: FormGroup;
    active:boolean = true;
    token:string
    allowSubmit: boolean = false;
    serviceCategory: ServiceCategoryModel;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private webApiPathService: WebApiPathService,
        private snackBar: MdSnackBar,
        private addServiceCategory: AddServiceCategoryService
    ){}

    ngOnInit(){
        this.getToken();
        this.buildForm();
    }

    getToken(){
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser.token;
        console.log(this.token);      
    }


     buildForm(): void {
         this.addServiceCategoryForm = this.fb.group({
            'name': [null, [
                Validators.required,
                Validators.minLength(4)
            ]],
            'description':[null]         
        });
    
        this.addServiceCategoryForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();

    }

    onValueChanged(data?: any){
        if(!this.addServiceCategoryForm) { return; }
        const form = this.addServiceCategoryForm;

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
        this.serviceCategory = this.addServiceCategoryForm.value;
        console.log(this.serviceCategory);
        this.addServiceCategory.addServiceCategory(this.serviceCategory, this.webApiPathService.getWebApiPath('add-service-category').path, this.token)
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
