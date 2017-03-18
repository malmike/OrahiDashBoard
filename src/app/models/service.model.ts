import { LocationModel } from './location.model';
import { ContactModel } from './contact.model';

export class ServiceModel{
    constructor(
        public serviceProvider?: string,
        public serviceType?: string,
        public serviceName?: string,
        public discription?: string,
        public trailer?: string,
        public image1?: string,
        public image2?: string,
        public image3?: string,
        public image4?: string,
        public image5?: string,
        public contact?: ContactModel,
        public location?: LocationModel,
        public online?: boolean,
        public rate?: string,
        public category?: string,
        public inCategory?: boolean,
    ){}
}