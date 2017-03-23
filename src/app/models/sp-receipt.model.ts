import {ServiceModel} from './service.model';
import {ContactModel} from './contact.model';
import {UserModel} from './user.model';

export class SpReceiptModel{
    constructor(
        public _id?: string,
        public userMobileMoney?: string,
        public userId?: string,
        public service?: ServiceModel,
        public contact?: ContactModel,
        public serviceProvider?: string,
        public serviceType?: string,
        public rate?: string,
        public bookDate?: string,
        public paymentDate?: string,
        public approved?: boolean,
        public transactionId?: string,
        public organisation?: string,
        public author?: string,
        public user?: UserModel
    ){}
}