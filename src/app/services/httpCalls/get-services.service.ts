import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { GlobalVariables } from '../../global-variables/global-variables';
import { ServiceModel } from '../../models/service.model';
import { ResponseSpModel } from '../../models/response-sp.model';

@Injectable()
export class GetServicesService {

    authUrl:string = GlobalVariables.getInstance().getWebApi();
    private service: ServiceModel = new ServiceModel();
    private token: string;

    constructor(private http: Http) {}

    getServices(path: string, token: string): Observable<boolean>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', token);
        headers.append('Accept', 'application/json');
        let requestoptions = new RequestOptions({
            headers: headers
        });


        let urlPath: string = this.authUrl + path;

        return this.http
            .get(urlPath, requestoptions)
            .map((res: Response) => {  
                if(res.status === 200){
                    this.service = res.json();
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

    getService():ServiceModel{
        return this.service;
    }

}
	