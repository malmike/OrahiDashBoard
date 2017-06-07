webpackJsonp([2,5],{

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_data_webapi_path_data__ = __webpack_require__(674);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebApiPathService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebApiPathService = (function () {
    function WebApiPathService() {
    }
    WebApiPathService.prototype.getWebApiPaths = function () {
        return __WEBPACK_IMPORTED_MODULE_1__app_data_webapi_path_data__["a" /* WebApiPathList */];
    };
    WebApiPathService.prototype.getWebApiPath = function (name) {
        return this.getWebApiPaths().find(function (webApiPath) { return webApiPath.name === name; });
    };
    WebApiPathService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], WebApiPathService);
    return WebApiPathService;
}());
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/webapi-path.service.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony export (immutable) */ __webpack_exports__["b"] = StructureValidator;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StructureValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function StructureValidator(structureRe) {
    return function (control) {
        var value = control.value;
        var validate = false;
        if (value === null || value === undefined || value === '') {
            return null;
        }
        else {
            structureRe.forEach(function (structure) {
                if (structure.test(value)) {
                    validate = structure.test(value);
                    return;
                }
            });
            return validate ? null : { 'forbiddenStructure': { value: value } };
        }
    };
}
var StructureValidatorDirective = (function () {
    function StructureValidatorDirective() {
        this.valFn = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator;
    }
    StructureValidatorDirective.prototype.ngOnChanges = function (changes) {
        var values = new Array();
        var change = changes['forbiddenStructure'].currentValue;
        if (change) {
            change.forEach(function (value) {
                var val = value;
                var re = val instanceof RegExp ? val : new RegExp(val, 'i');
                values.push(re);
            });
            if (values.length > 0) {
                this.valFn = StructureValidator(values);
            }
        }
        else {
            this.valFn = __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator;
        }
    };
    StructureValidatorDirective.prototype.validate = function (control) {
        return this.valFn(control);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], StructureValidatorDirective.prototype, "forbiddenStructure", void 0);
    StructureValidatorDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[forbiddenStructure]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NG_VALIDATORS */], useExisting: StructureValidatorDirective, multi: true }]
        }), 
        __metadata('design:paramtypes', [])
    ], StructureValidatorDirective);
    return StructureValidatorDirective;
}());
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/structure.validator.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_data_reg_exp_data__ = __webpack_require__(673);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegExpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegExpService = (function () {
    function RegExpService() {
    }
    RegExpService.prototype.getRegExps = function () {
        return __WEBPACK_IMPORTED_MODULE_1__app_data_reg_exp_data__["a" /* RegExpList */];
    };
    RegExpService.prototype.getRegExp = function (name) {
        return this.getRegExps().find(function (regExp) { return regExp.name === name; });
    };
    RegExpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], RegExpService);
    return RegExpService;
}());
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/reg-exp.service.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProviderModel; });
var ServiceProviderModel = (function () {
    function ServiceProviderModel(_id, name, serviceType, email, contact, password, sno, websiteURL, paymentBatch, trust, image, logo, location) {
        this._id = _id;
        this.name = name;
        this.serviceType = serviceType;
        this.email = email;
        this.contact = contact;
        this.password = password;
        this.sno = sno;
        this.websiteURL = websiteURL;
        this.paymentBatch = paymentBatch;
        this.trust = trust;
        this.image = image;
        this.logo = logo;
        this.location = location;
    }
    return ServiceProviderModel;
}());
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/service-provider.model.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVariables; });
// export const  GlobalVariables: Array<any> = [
//     {name: 'webApi', value: },
//     {name: 'webApiImage', value: ''}
// ]
var GlobalVariables = (function () {
    function GlobalVariables() {
        this.webApi = "https://orahirestapi.herokuapp.com/";
    }
    GlobalVariables.getInstance = function () {
        if (!GlobalVariables.instance) {
            GlobalVariables.instance = new GlobalVariables();
        }
        return GlobalVariables.instance;
    };
    GlobalVariables.prototype.getWebApi = function () {
        return this.webApi;
    };
    return GlobalVariables;
}());
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/global-variables.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_data_app_category_data__ = __webpack_require__(672);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCategoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppCategoryService = (function () {
    function AppCategoryService() {
    }
    AppCategoryService.prototype.getCategories = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__app_data_app_category_data__["a" /* CategoryList */]);
    };
    AppCategoryService.prototype.getCategoriesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getCategories()); }, 100);
        });
    };
    AppCategoryService.prototype.getCategory = function (_id) {
        return this.getCategories()
            .then(function (categories) { return categories.find(function (category) { return category._id === _id; }); });
    };
    AppCategoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AppCategoryService);
    return AppCategoryService;
}());
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/app-categories.service.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_information_reg_exp_service__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_information_webapi_path_service__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_httpCalls_login_sp_service__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__form_validators_structure_validator__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_service_provider_model__ = __webpack_require__(265);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SPLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SPLoginComponent = (function () {
    function SPLoginComponent(fb, router, regExpService, webApiPathService, loginSpService, snackBar) {
        this.fb = fb;
        this.router = router;
        this.regExpService = regExpService;
        this.webApiPathService = webApiPathService;
        this.loginSpService = loginSpService;
        this.snackBar = snackBar;
        this.active = true;
        this.serviceProvider = new __WEBPACK_IMPORTED_MODULE_8__models_service_provider_model__["a" /* ServiceProviderModel */]();
        this.formErrors = {
            'email': ''
        };
        this.validationMessages = {
            'email': {
                'required': '',
                'forbiddenStructure': 'Email format should be "john@doe.com".'
            }
        };
    }
    SPLoginComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    SPLoginComponent.prototype.navRegister = function () {
        this.router.navigate(['/spregister']);
    };
    SPLoginComponent.prototype.buildForm = function () {
        var _this = this;
        this.loginForm = this.fb.group({
            'email': [null, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__form_validators_structure_validator__["b" /* StructureValidator */])([this.regExpService.getRegExp('email').regExp])
                ]],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
        this.loginForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    SPLoginComponent.prototype.onValueChanged = function (data) {
        if (!this.loginForm) {
            return;
        }
        var form = this.loginForm;
        for (var field in this.formErrors) {
            //Clear previous error messages (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] = messages[key];
                }
            }
        }
    };
    SPLoginComponent.prototype.onSubmitForm = function () {
        var _this = this;
        this.serviceProvider = this.loginForm.value;
        //console.log(this.serviceProvider);
        this.loginSpService.authenticate(this.serviceProvider, this.webApiPathService.getWebApiPath('login-sp').path)
            .subscribe(function (responseSp) {
            if (responseSp.status === "success") {
                console.log(responseSp.message);
                _this.snackBar.open(responseSp.message, '', {
                    duration: 2000,
                });
            }
            else {
                _this.snackBar.open(responseSp.message, '', {
                    duration: 2000,
                });
                console.log(responseSp.message);
            }
        }, function (errMsg) {
            _this.snackBar.open(errMsg, '', {
                duration: 2000,
            });
            console.log(errMsg);
        });
    };
    SPLoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-login',
            template: __webpack_require__(746),
            styles: [__webpack_require__(742)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_information_reg_exp_service__["a" /* RegExpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_shared_information_reg_exp_service__["a" /* RegExpService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_information_webapi_path_service__["a" /* WebApiPathService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_shared_information_webapi_path_service__["a" /* WebApiPathService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_httpCalls_login_sp_service__["a" /* LoginSpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_httpCalls_login_sp_service__["a" /* LoginSpService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */]) === 'function' && _f) || Object])
    ], SPLoginComponent);
    return SPLoginComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/sp-login.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_information_app_categories_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_information_reg_exp_service__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_information_webapi_path_service__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_httpCalls_register_sp_service__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_service_provider_model__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_location_model__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__form_validators_compare_items_validator__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__form_validators_structure_validator__ = __webpack_require__(189);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SPRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SPRegisterComponent = (function () {
    function SPRegisterComponent(fb, router, appCategoryService, regExpService, webApiPathService, registerSpService, snackBar) {
        this.fb = fb;
        this.router = router;
        this.appCategoryService = appCategoryService;
        this.regExpService = regExpService;
        this.webApiPathService = webApiPathService;
        this.registerSpService = registerSpService;
        this.snackBar = snackBar;
        this.serviceProvider = new __WEBPACK_IMPORTED_MODULE_8__models_service_provider_model__["a" /* ServiceProviderModel */]();
        this.active = true;
        this.lat = 1.277328;
        this.lng = 32.389984;
        this.custom_lat = 0;
        this.custom_lng = 0;
        this.formErrors = {
            'serviceType': '',
            'name': '',
            'email': '',
            'sno': '',
            'contact': '',
            'password': '',
            'confirmPassword': ''
        };
        this.validationMessages = {
            'serviceType': {
                'required': 'ServiceType is required.'
            },
            'name': {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 3 characters long.'
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
                'mismatchedItems': 'Passwords do not match'
            }
        };
    }
    SPRegisterComponent.prototype.setPosition = function (position) {
        console.log(position);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(this.lat + "-" + this.lng);
    };
    SPRegisterComponent.prototype.ngOnInit = function () {
        this.getCurrentLocation();
        this.getCategories();
        this.buildForm();
    };
    SPRegisterComponent.prototype.mapClicked = function ($event) {
        this.custom_lat = $event.coords.lat;
        this.custom_lng = $event.coords.lng;
        console.log(this.custom_lat + "-" + this.custom_lng);
    };
    SPRegisterComponent.prototype.getCurrentLocation = function () {
        if (!!navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
        }
        else {
            console.log('Geo Location not supported by this browser');
        }
    };
    SPRegisterComponent.prototype.getCategories = function () {
        var _this = this;
        this.appCategoryService.getCategories().then(function (categories) { return _this.categoryList = categories; });
    };
    SPRegisterComponent.prototype.navLogin = function () {
        this.router.navigate(['/splogin']);
    };
    SPRegisterComponent.prototype.buildForm = function () {
        var _this = this;
        this.registrationForm = this.fb.group({
            'serviceType': [null,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required
            ],
            'name': [null, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3)
                ]],
            'email': [null, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__form_validators_structure_validator__["b" /* StructureValidator */])([this.regExpService.getRegExp('email').regExp])
                ]],
            'sno': [null, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(6)
                ]],
            'contact': [null, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__form_validators_structure_validator__["b" /* StructureValidator */])([
                        this.regExpService.getRegExp('phone1').regExp,
                        this.regExpService.getRegExp('phone2').regExp])
                ]],
            'password': [null, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(6)
                ]],
            'confirmPassword': [null, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required
                ]]
        }, { validator: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__form_validators_compare_items_validator__["a" /* CompareItemsValidator */])('password', 'confirmPassword') });
        this.registrationForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    SPRegisterComponent.prototype.onValueChanged = function (data) {
        if (!this.registrationForm) {
            return;
        }
        var form = this.registrationForm;
        // if(form.get('password').value !== null)
        //     this.provePassword = form.get('password').value;
        var confirmPassword = form.get('confirmPassword');
        if (confirmPassword && confirmPassword.dirty &&
            this.registrationForm.getError('mismatchedItems')) {
            this.provePassword = "Passwords do not match";
        }
        else {
            this.provePassword = null;
        }
        for (var field in this.formErrors) {
            //Clear previous error messages (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] = messages[key];
                }
            }
        }
    };
    SPRegisterComponent.prototype.onSubmitForm = function () {
        var _this = this;
        this.serviceProvider = this.registrationForm.value;
        if ((this.custom_lat !== 0 && this.custom_lng !== 0)) {
            var location = new __WEBPACK_IMPORTED_MODULE_9__models_location_model__["a" /* LocationModel */](this.custom_lat, this.custom_lng);
            this.serviceProvider.location = location;
        }
        console.log(this.serviceProvider);
        this.registerSpService.register(this.serviceProvider, this.webApiPathService.getWebApiPath('register-sp').path)
            .subscribe(function (responseSp) {
            if (responseSp.status === "success") {
                console.log(responseSp.message);
                _this.snackBar.open(responseSp.message, '', {
                    duration: 2000,
                });
                _this.router.navigate(['/splogin']);
            }
            else {
                _this.snackBar.open(responseSp.message, '', {
                    duration: 2000,
                });
                console.log(responseSp.message);
            }
        }, function (errMsg) {
            _this.snackBar.open(errMsg, '', {
                duration: 2000,
            });
            console.log(errMsg);
        });
    };
    SPRegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-register',
            template: __webpack_require__(747),
            styles: [__webpack_require__(743)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_information_app_categories_service__["a" /* AppCategoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_shared_information_app_categories_service__["a" /* AppCategoryService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_information_reg_exp_service__["a" /* RegExpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_shared_information_reg_exp_service__["a" /* RegExpService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_information_webapi_path_service__["a" /* WebApiPathService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_shared_information_webapi_path_service__["a" /* WebApiPathService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_httpCalls_register_sp_service__["a" /* RegisterSpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_httpCalls_register_sp_service__["a" /* RegisterSpService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */]) === 'function' && _g) || Object])
    ], SPRegisterComponent);
    return SPRegisterComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/sp-register.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_variables_global_variables__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_service_provider_model__ = __webpack_require__(265);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginSpService = (function () {
    function LoginSpService(http) {
        this.http = http;
        this.authUrl = __WEBPACK_IMPORTED_MODULE_4__global_variables_global_variables__["a" /* GlobalVariables */].getInstance().getWebApi();
        this.serviceProvider = new __WEBPACK_IMPORTED_MODULE_5__models_service_provider_model__["a" /* ServiceProviderModel */]();
    }
    LoginSpService.prototype.authenticate = function (serviceProvider, path) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.password = serviceProvider.password;
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        var requestoptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            headers: headers
        });
        var urlPath = this.authUrl + path;
        console.log(urlPath);
        console.log(serviceProvider);
        return this.http
            .post(urlPath, JSON.stringify(serviceProvider), requestoptions)
            .map(function (res) {
            var responseSp = res.json();
            if (responseSp.status === 'success') {
                _this.serviceProvider = responseSp.serviceprovider;
                _this.serviceProvider.password = _this.password;
                _this.token = responseSp.token;
                localStorage.setItem('currentUser', JSON.stringify({ serviceProvider: _this.serviceProvider, token: _this.token }));
                return responseSp;
            }
            else {
                return responseSp;
            }
        })
            .catch(function (err) { return _this.handleError(err); });
    };
    LoginSpService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || 'Failed';
            var err = body.message || JSON.stringify(body);
            //${error.status} - ${error.statusText || ''} 
            errMsg = "" + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    LoginSpService.prototype.getServiceProvider = function () {
        return this.serviceProvider;
    };
    LoginSpService.prototype.getToken = function () {
        return this.token;
    };
    LoginSpService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.serviceProvider = null;
        localStorage.removeItem('currentUser');
    };
    LoginSpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], LoginSpService);
    return LoginSpService;
    var _a;
}());
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/login-sp.service.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_variables_global_variables__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterSpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterSpService = (function () {
    function RegisterSpService(http) {
        this.http = http;
        this.authUrl = __WEBPACK_IMPORTED_MODULE_4__global_variables_global_variables__["a" /* GlobalVariables */].getInstance().getWebApi();
    }
    RegisterSpService.prototype.register = function (serviceProvider, path) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        var requestoptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            headers: headers
        });
        var urlPath = this.authUrl + path;
        return this.http
            .post(urlPath, JSON.stringify(serviceProvider), requestoptions)
            .map(function (res) {
            var responseSp = res.json();
            return responseSp;
        })
            .catch(function (err) { return _this.handleError(err); });
    };
    RegisterSpService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || 'Failed';
            var err = body.message || JSON.stringify(body);
            //${error.status} - ${error.statusText || ''} 
            errMsg = "" + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    RegisterSpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], RegisterSpService);
    return RegisterSpService;
    var _a;
}());
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/register-sp.service.js.map

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/modules/dashboard.module": [
		1002,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 513;


/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(681);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/main.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationModel; });
var LocationModel = (function () {
    function LocationModel(lat, long) {
        this.lat = lat;
        this.long = long;
    }
    return LocationModel;
}());
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/location.model.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryList; });
var CategoryList = [
    { _id: '01', name: 'Hotel' },
    { _id: '02', name: 'Event' },
    { _id: '03', name: 'Restaurant' },
    { _id: '04', name: 'House' },
    { _id: '05', name: 'Cab' },
    { _id: '06', name: 'Boda-Boda' },
    { _id: '07', name: 'Delivery Service' },
    { _id: '08', name: 'Foreign Exchange' },
    { _id: '09', name: 'Bank' },
    { _id: '10', name: 'Mobile Money Agent' },
    { _id: '11', name: 'Police Station' }
];
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/app-category.data.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegExpList; });
var RegExpList = [
    { name: 'email', regExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i },
    { name: 'phone1', regExp: /^[0-9]{10}$/i },
    { name: 'phone2', regExp: /^[+][0-9]{12}$/i }
];
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/reg-exp.data.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebApiPathList; });
var WebApiPathList = [
    { name: 'register-sp', path: 'api/serviceProvider/registerServiceProvider' },
    { name: 'login-sp', path: 'api/serviceProvider/authenticate' },
    { name: 'add-service', path: 'api/serviceProvider/postService' },
    { name: 'add-service-category', path: 'api/serviceProvider/addCategory' },
    { name: 'get-service-category', path: 'api/serviceProvider/getCategories' },
    { name: 'get-sp-receipts', path: 'api/serviceprovider/getSPReceipts' }
];
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/webapi-path.data.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(126);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var routes = [
    { path: '', redirectTo: 'splogin', pathMatch: 'full' },
    { path: 'splogin', redirectTo: 'splogin', pathMatch: 'full' },
    { path: 'spregister', redirectTo: 'spregister', pathMatch: 'full' },
    { path: 'nav', loadChildren: 'app/modules/dashboard.module#DashBoardModule' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/app-routing.module.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(745),
            styles: [__webpack_require__(741)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/app.component.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_app_access_module__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(675);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__modules_app_access_module__["a" /* AppAccessModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/app.module.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CompareItemsValidator;
function CompareItemsValidator(itemKey, confirmItemKey) {
    return function (group) {
        var item = group.controls[itemKey];
        var confirmItem = group.controls[confirmItemKey];
        return item.value === confirmItem.value ? null : { mismatchedItems: true };
    };
}
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/compare-items.validator.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_app_access_sp_login_sp_login_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_app_access_sp_register_sp_register_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes_app_access_routing_module__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_shared_information_app_categories_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_shared_information_reg_exp_service__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_shared_information_webapi_path_service__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_httpCalls_register_sp_service__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_httpCalls_login_sp_service__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__form_validators_structure_validator__ = __webpack_require__(189);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAccessModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppAccessModule = (function () {
    function AppAccessModule() {
    }
    AppAccessModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCWWwrRN2N09Qt5TtJQTQi-4i0bi10LMSE'
                }),
                __WEBPACK_IMPORTED_MODULE_9__routes_app_access_routing_module__["a" /* AppAccessRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__components_app_access_sp_login_sp_login_component__["a" /* SPLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_app_access_sp_register_sp_register_component__["a" /* SPRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__form_validators_structure_validator__["a" /* StructureValidatorDirective */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_shared_information_app_categories_service__["a" /* AppCategoryService */],
                __WEBPACK_IMPORTED_MODULE_11__services_shared_information_reg_exp_service__["a" /* RegExpService */],
                __WEBPACK_IMPORTED_MODULE_12__services_shared_information_webapi_path_service__["a" /* WebApiPathService */],
                __WEBPACK_IMPORTED_MODULE_13__services_httpCalls_register_sp_service__["a" /* RegisterSpService */],
                __WEBPACK_IMPORTED_MODULE_14__services_httpCalls_login_sp_service__["a" /* LoginSpService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppAccessModule);
    return AppAccessModule;
}());
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/app-access.module.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_app_access_sp_login_sp_login_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_app_access_sp_register_sp_register_component__ = __webpack_require__(454);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAccessRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppAccessRoutingModule = (function () {
    function AppAccessRoutingModule() {
    }
    AppAccessRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: 'splogin', component: __WEBPACK_IMPORTED_MODULE_2__components_app_access_sp_login_sp_login_component__["a" /* SPLoginComponent */] },
                    { path: 'spregister', component: __WEBPACK_IMPORTED_MODULE_3__components_app_access_sp_register_sp_register_component__["a" /* SPRegisterComponent */] }
                ])],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppAccessRoutingModule);
    return AppAccessRoutingModule;
}());
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/app-access-routing.module.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/mnt/d/malmike21/Projects/Angular/OrahiDashBoard/src/environment.js.map

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(62)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(62)();
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required, md-input-container{\r\n  color: black;\r\n}\r\n\r\n.ng-invalid:not(md-input-container){\r\n  color: red;\r\n}\r\n\r\nmd-select .placeholder{\r\n  text-align: right;\r\n}\r\n\r\nmd-select{\r\n  margin-bottom: 0.6em;\r\n  width:100%;\r\n  text-align: left;\r\n}\r\n\r\n#sp-container{\r\n    padding-top: 1.5em;\r\n}\r\n\r\nmd-card{\r\n    margin: auto; \r\n    padding: 3em 3em 2.5em 3em; \r\n    width: -webkit-max-content; \r\n    width: -moz-max-content; \r\n    width: max-content; \r\n    text-align: center;\r\n}\r\n\r\nmd-card-title{\r\n    padding: 0.5em 1.5em 0 1.5em;\r\n}\r\n\r\nmd-card-content{\r\n    padding: 0.1em 1.5em 0 1.5em;\r\n}\r\n\r\nmd-input-container{\r\n    width: 100%;\r\n}\r\n\r\n#submit-container{\r\n    padding-top: 1.5em;\r\n}\r\n\r\nbutton{\r\n    width: 100%; \r\n    background-color: black; \r\n    color: whitesmoke;\r\n}\r\n\r\nmd-card-footer{\r\n    padding-top: 1.5em; \r\n    padding-bottom: 1.5em;\r\n}\r\n\r\na{\r\n    color: orangered;\r\n    text-decoration: none;\r\n}\r\n\r\na:hover{\r\n    color: blueviolet;\r\n    text-decoration: underline;\r\n}\r\n\r\nmd-hint{\r\n  color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(62)();
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required, md-input-container{\r\n  color: black;\r\n}\r\n\r\n.ng-invalid:not(md-input-container){\r\n  color: red;\r\n}\r\n\r\nmd-select .placeholder{\r\n  text-align: right;\r\n}\r\n\r\nmd-select{\r\n  margin-bottom: 0.6em;\r\n  width:100%;\r\n  text-align: left;\r\n}\r\n\r\n#sp-container{\r\n    padding-top: 1.5em;\r\n}\r\n\r\nmd-card{\r\n    margin: auto; \r\n    padding: 3em 3em 2.5em 3em; \r\n    width: -webkit-max-content; \r\n    width: -moz-max-content; \r\n    width: max-content; \r\n    text-align: center;\r\n}\r\n\r\nmd-card-title{\r\n    padding: 0.5em 1.5em 0 1.5em;\r\n}\r\n\r\nmd-card-content{\r\n    padding: 0.1em 1.5em 0 1.5em;\r\n}\r\n\r\nmd-input-container{\r\n    width: 100%;\r\n}\r\n\r\n#submit-container{\r\n    padding-top: 1.5em;\r\n}\r\n\r\nbutton{\r\n    width: 100%; \r\n    background-color: black; \r\n    color: whitesmoke;\r\n}\r\n\r\nmd-card-footer{\r\n    padding-top: 1.5em; \r\n    padding-bottom: 1.5em;\r\n}\r\n\r\na{\r\n    color: orangered;\r\n    text-decoration: none;\r\n}\r\n\r\na:hover{\r\n    color: blueviolet;\r\n    text-decoration: underline;\r\n}\r\n\r\nmd-hint{\r\n  color: red;\r\n}\r\n\r\n.sebm-google-map-container {\r\n  height: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"center center\" id=\"sp-container\">\r\n    <md-card>\r\n      <md-card-header>\r\n        <img md-card-image src=\"assets/images/orahi_logo.png\" style=\"margin:auto; width: 3em;height: 3em; background-color: orangered \">\r\n      </md-card-header>\r\n      <md-card-title>Service Provider Login</md-card-title>\r\n      <md-card-content>\r\n        <form [formGroup]=\"loginForm\" *ngIf=\"active\" (ngSubmit)=\"onSubmitForm()\">\r\n          <md-input-container>\r\n            <input mdInput placeholder=\"Email\" type=\"email\" formControlName=\"email\" id=\"email\" required>\r\n            <md-hint align=\"end\" *ngIf=\"formErrors.email\">{{ formErrors.email }}</md-hint>\r\n          </md-input-container><br/>\r\n          <md-input-container>\r\n            <input mdInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" id=\"password\" required>\r\n          </md-input-container>\r\n          <div id=\"submit-container\">\r\n            <button md-raised-button type=\"submit\" [disabled]=\"!loginForm.valid\">LOGIN</button>\r\n          </div>\r\n        </form>\r\n      </md-card-content>\r\n      <md-card-footer>\r\n        <a (click)=navRegister()>Have no account, Register here</a>\r\n      </md-card-footer>\r\n    </md-card>\r\n</div>"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"center center\" id=\"sp-container\">\r\n    <md-card>\r\n      <md-card-header>\r\n        <img md-card-image src=\"assets/images/orahi_logo.png\" style=\"margin:auto; width: 3em;height: 3em; background-color: orangered \">\r\n      </md-card-header>\r\n      <md-card-title>Service Provider Registration</md-card-title>\r\n      <md-card-content>\r\n        <form [formGroup]=\"registrationForm\" *ngIf=\"active\" (ngSubmit)=\"onSubmitForm()\">\r\n          <md-select placeholder=\"Service Category\" formControlName=\"serviceType\" id=\"serviceType\" required>\r\n            <md-option *ngFor=\"let category of categoryList\" [value]=\"category.name\">{{ category.name }}</md-option>\r\n            <md-hint align=\"end\" *ngIf=\"formErrors.serviceType\">{{ formErrors.serviceType }}</md-hint>\r\n          </md-select><br/>\r\n          <md-input-container>\r\n            <input mdInput placeholder=\"Company Name\" type=\"text\" formControlName=\"name\" id=\"name\" required>\r\n            <md-hint align=\"end\" *ngIf=\"formErrors.name\">{{ formErrors.name }}</md-hint>\r\n          </md-input-container><br/>\r\n          <md-input-container>\r\n            <input mdInput placeholder=\"Company Email\" type=\"email\" formControlName=\"email\" id=\"email\" required>\r\n            <md-hint align=\"end\" *ngIf=\"formErrors.email\">{{ formErrors.email }}</md-hint>\r\n          </md-input-container><br/>\r\n          <md-input-container>\r\n            <input mdInput placeholder=\"Company License Trading Number\" type=\"text\" formControlName=\"sno\" id=\"sno\" required>\r\n            <md-hint align=\"end\" *ngIf=\"formErrors.sno\">{{ formErrors.sno }}</md-hint>\r\n          </md-input-container><br/>\r\n          <md-input-container>\r\n            <input mdInput placeholder=\"Company Phone Number\" type=\"text\" formControlName=\"contact\" id=\"contact\" required>\r\n            <md-hint align=\"end\" *ngIf=\"formErrors.contact\">{{ formErrors.contact }}</md-hint>\r\n          </md-input-container><br/>\r\n          <md-input-container>\r\n            <input mdInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" id=\"password\" required>\r\n            <md-hint align=\"end\" *ngIf=\"formErrors.password\">{{ formErrors.password }}</md-hint>\r\n          </md-input-container><br/>\r\n          <md-input-container>\r\n            <input mdInput placeholder=\"Re-Enter Password\" type=\"password\" formControlName=\"confirmPassword\" id=\"confirmPassword\" required>\r\n            <md-hint align=\"end\" *ngIf=\"provePassword\">{{ provePassword }}</md-hint>\r\n          </md-input-container>\r\n\r\n          <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" (mapClick)=\"mapClicked($event)\">\r\n            <sebm-google-map-marker *ngIf=\"custom_lat && custom_lng\" [latitude]=\"custom_lat\" [longitude]=\"custom_lng\"></sebm-google-map-marker>\r\n            <!--<sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map-marker>-->\r\n          </sebm-google-map>\r\n\r\n          <div id=\"submit-container\">\r\n            <button md-raised-button type=\"submit\" [disabled]=\"!registrationForm.valid\">REGISTER</button>\r\n          </div>\r\n        </form>\r\n      </md-card-content>\r\n      <md-card-footer>\r\n        <a (click)=navLogin()>Have an account, Login here</a>\r\n      </md-card-footer>\r\n    </md-card>\r\n</div>"

/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(514);


/***/ })

},[999]);
//# sourceMappingURL=main.bundle.js.map