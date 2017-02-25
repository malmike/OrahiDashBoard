import { Injectable } from '@angular/core';
import { WebApiPathList } from '../../app-data/webapi-path.data';
import { WebApiPathModel } from '../../models/webapi-path.model';

@Injectable()
export class WebApiPathService{
    getWebApiPaths(): Array<WebApiPathModel>{
        return WebApiPathList;
    }

    getWebApiPath(name: string): WebApiPathModel{
        return this.getWebApiPaths().find(webApiPath => webApiPath.name === name);
    }
}