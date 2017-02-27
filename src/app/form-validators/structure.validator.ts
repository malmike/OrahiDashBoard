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
    @Input() forbiddenStructure: Array<string>;
    private valFn = Validators.nullValidator;

    ngOnChanges(changes: SimpleChanges): void{
        let values: Array<RegExp> = new Array<RegExp>();
        const change: Array<string> = changes['forbiddenStructure'].currentValue;
        if(change){
            change.forEach(value => {
                const val: any= value;
                const re: RegExp = val instanceof RegExp ? val : new RegExp(val, 'i');
                values.push(re);
            })

            if(values.length > 0){
                this.valFn = StructureValidator(values);
            }
        }else{
                    this.valFn = Validators.nullValidator;
        }
    }
    
    validate(control: AbstractControl): {[key: string]: any} {
        return this.valFn(control);
    }
}
