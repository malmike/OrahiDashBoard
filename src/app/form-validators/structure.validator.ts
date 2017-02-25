import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function StructureValidator(structureRe: Array<RegExp>): ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} => {
        const value = control.value;
        var validate: boolean = false;
        structureRe.forEach(structure => {
            if(structure.test(value)){
                validate = structure.test(value);
                return;
            }
        })

        return validate ? null: {'forbiddenStructure': {value}};
    }
}

@Directive({
    selector: '[forbiddenStructure]',
    providers: [{provide: NG_VALIDATORS, useExisting: StructureValidatorDirective, multi: true}]
})
export class StructureValidatorDirective implements Validator, OnChanges {
    @Input() forbiddenStructure: string;
    private valFn = Validators.nullValidator;
    ngOnChanges(changes: SimpleChanges): void{
        const change = changes['forbiddenStructure'];
        if(change){
            const val: string | RegExp = change.currentValue;
            const re = val instanceof RegExp ? val: new RegExp(val, 'i');
            this.valFn = StructureValidator([re]);
        }else{
            this.valFn = Validators.nullValidator;
        }
    }
    validate(control: AbstractControl): {[key: string]: any} {
        return this.valFn(control);
    }
}
