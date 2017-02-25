import { RegExpModel } from '../models/reg-exp.model';

export const RegExpList:Array<RegExpModel> = [
    {name: 'email', regExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i},
    {name: 'phone1', regExp: /^[0-9]{10}$/i},
    {name: 'phone2', regExp: /^[+][0-9]{12}$/i}
]