import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { GlobalVariables } from '../../global-variables/global-variables';
import { ServiceProviderModel } from '../../models/service-provider.model';
import { ResponseSpModel } from '../../models/response-sp.model';

@Injectable()
export class LoginSpService {

    authUrl:string = GlobalVariables.getInstance().getWebApi();
    private serviceProvider: ServiceProviderModel = new ServiceProviderModel();
    private token: string;

    constructor(private http: Http) {}

    authenticate(serviceProvider: ServiceProviderModel, path: string): Observable<ResponseSpModel>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        let requestoptions = new RequestOptions({
            headers: headers
        });


        let urlPath: string = this.authUrl + path;

        return this.http
            .post(urlPath, JSON.stringify(serviceProvider), requestoptions)
            .map((res: Response) => {          
                let responseSp: ResponseSpModel = res.json();
                if(responseSp.status === 'success'){
                    this.serviceProvider = responseSp.serviceProvider;
                    this.token = responseSp.token;
                    localStorage.setItem('currentUser', JSON.stringify({ serviceProvider: this.serviceProvider, token: this.token }));
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
            //${error.status} - ${error.statusText || ''} 
            errMsg = `${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getServiceProvider():ServiceProviderModel{
        return this.serviceProvider;
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.serviceProvider = null;
        localStorage.removeItem('currentUser');
    }

}
	