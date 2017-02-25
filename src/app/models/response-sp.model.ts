import { ServiceProviderModel } from './service-provider.model';

export class ResponseSpModel{
    constructor(
        public status: string,
        public message: string, 
        public token?: string,
        public serviceProvider?: ServiceProviderModel
    ){}
}