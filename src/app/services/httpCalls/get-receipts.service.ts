import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { GlobalVariables } from '../../global-variables/global-variables';
import { SpReceiptModel } from '../../models/sp-receipt.model';

@Injectable()
export class GetReceiptsService {

    authUrl:string = GlobalVariables.getInstance().getWebApi();
    spReceiptList: Array<SpReceiptModel> = new Array<SpReceiptModel>();

    constructor(private http: Http) {}

    getReceipts(path: string, token: string): Observable<Boolean>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', token);
        headers.append('Accept', 'application/json');
        let requestoptions = new RequestOptions({
            headers: headers
        });


        let urlPath: string = this.authUrl + path;
        console.log(urlPath);
        return this.http
            .get(urlPath, requestoptions)
            .map((res: Response) => {  
                let test: Array<SpReceiptModel> = res.json();        
                this.spReceiptList = test;
                if(this.spReceiptList.length !== 0){
                    return true;
                }else{
                    return false;
                }
            })
            .catch((err) => this.handleError(err));
    }

    public handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || 'Failed';
            const err = body.message || JSON.stringify(body);
            errMsg = `${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    public getReceiptsList(): Array<SpReceiptModel>{
        return this.spReceiptList;
    }

}