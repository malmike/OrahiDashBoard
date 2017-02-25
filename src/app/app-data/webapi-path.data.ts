import { WebApiPathModel } from '../models/webapi-path.model';

export const WebApiPathList:Array<WebApiPathModel> = [
    {name: 'register-sp', path: 'api/serviceProvider/registerServiceProvider'},
    {name: 'login-sp', path: 'api/serviceProvider/authenticate'}
]