export class UserModel{
    constructor(
        public name?: string,
        public userName?: string,
        public email?: string,
        public phoneNumber?: string,
        public mobileMoneyNumber?: string,
        public mobileMoneyTelecom?: string,
        public password?: string,
        public adminReg?: boolean,
        public admin?: boolean,
        public image?: string
    ){}
}