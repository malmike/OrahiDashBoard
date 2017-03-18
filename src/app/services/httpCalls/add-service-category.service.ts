import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { GlobalVariables } from '../../global-variables/global-variables';
import { ServiceCategoryModel } from '../../models/service-category.model';
import { ResponseSpModel } from '../../models/response-sp.model';

@Injectable()
export class AddServiceCategoryService {

    authUrl:string = GlobalVariables.getInstance().getWebApi();

    constructor(private http: Http) {}

    addServiceCategory(serviceCategory: ServiceCategoryModel, path: string, token: string): Observable<ResponseSpModel>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', token);
        headers.append('Accept', 'application/json');
        let requestoptions = new RequestOptions({
            headers: headers
        });


        let urlPath: string = this.authUrl + path;

        return this.http
            .post(urlPath, JSON.stringify(serviceCategory), requestoptions)
            .map((res: Response) => {          
                let responseSp: ResponseSpModel = res.json();
                if(responseSp.status === 'success'){
                    return responseSp;
                }else{
                    return responseSp;
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

}
	