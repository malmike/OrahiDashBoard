import { WebApiPathModel } from '../models/webapi-path.model';

export const WebApiPathList:Array<WebApiPathModel> = [
    {name: 'register-sp', path: 'api/serviceProvider/registerServiceProvider'},
    {name: 'login-sp', path: 'api/serviceProvider/authenticate'},
    {name: 'add-service', path: 'api/serviceProvider/postService'},
    {name: 'add-service-category', path: 'api/serviceProvider/addCategory'},
    {name: 'get-service-category', path: 'api/serviceProvider/getCategories'}
]