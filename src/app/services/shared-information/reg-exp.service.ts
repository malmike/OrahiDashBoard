import { Injectable } from '@angular/core';
import { RegExpList } from '../../app-data/reg-exp.data';
import { RegExpModel } from '../../models/reg-exp.model';

@Injectable()
export class RegExpService{
    getRegExps(): Array<RegExpModel>{
        return RegExpList;
    }

    getRegExp(name: string): RegExpModel{
        return this.getRegExps().find(regExp => regExp.name === name);
    }
}