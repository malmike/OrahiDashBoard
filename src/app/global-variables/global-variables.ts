// export const  GlobalVariables: Array<any> = [
//     {name: 'webApi', value: },
//     {name: 'webApiImage', value: ''}
// ]
    
export class GlobalVariables {
    private static instance: GlobalVariables;
    private webApi:string = "https://orahiapi.herokuapp.com/";
    private constructor() {}
    static getInstance() {
        if (!GlobalVariables.instance) {
            GlobalVariables.instance = new GlobalVariables();
            // ... any one time initialization goes here ...
        }
        return GlobalVariables.instance;
    }
    getWebApi():string { 
        return this.webApi;
    }
}