//External depencies
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
 

//Services
import { WebApiPathService } from '../../services/shared-information/webapi-path.service';
import { GetReceiptsService } from '../../services/httpCalls/get-receipts.service';

//Models
import { SpReceiptModel } from '../../models/sp-receipt.model';
import { UserModel } from '../../models/user.model';
import { ServiceModel } from '../../models/service.model';


@Component({
  selector: 'sp-receipts',
  templateUrl: './sp-receipts.component.html',
  styleUrls: ['./sp-receipts.component.css']
})

export class SpReceiptsComponent implements OnInit{
    categoryList: Array<any>;
    service: ServiceModel = new ServiceModel();
    token:string;
    spReceiptsList: Array<SpReceiptModel> = new Array<SpReceiptModel>();

    constructor(
        private router: Router,
        private getReceiptService: GetReceiptsService,
        private webApiPathService: WebApiPathService,
        private snackBar: MdSnackBar
    ){}

    ngOnInit(){
        this.getToken();
    }

    getToken(){
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser.token;
        this.getSpReceiptsList();
    }

    getSpReceiptsList(){
        //console.log(this.webApiPathService.getWebApiPath('get-sp-receipts').path);
        this.getReceiptService.getReceipts( this.webApiPathService.getWebApiPath('get-sp-receipts').path, this.token)
        .subscribe(response => {
            if(response){
                this.spReceiptsList = this.getReceiptService.getReceiptsList();
                this.spReceiptsList.forEach((object)=>{
                    let paymentDate = new Date(object.paymentDate);
                    let year = paymentDate.getFullYear();
                    let month = paymentDate.getMonth()+1;
                    let dt = paymentDate.getDate();    
                    let hours = paymentDate.getHours();
                    let minutes = paymentDate.getMinutes();
                    let seconds = paymentDate.getSeconds();
                    object.paymentDate = dt+'-' + month + '-'+year+' '+hours+':' + minutes + ':'+seconds;
                });
                
            }else{
                this.snackBar.open('No receipts exist', '', {
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

}
