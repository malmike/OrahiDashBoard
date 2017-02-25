import { LocationModel } from './location.model';

export class ServiceProviderModel{
    constructor(
        public _id?: string,
        public name?: string,
        public serviceType?:  string,
        public email?: string,
        public contact?: string,
        public password?: string,
        public sno?: string,
        public websiteURL?: string,
        public paymentBatch?: string,
        public trust?: Boolean, 
        public image?: string,
        public logo?: string,
        public location?: LocationModel
    ){}
}