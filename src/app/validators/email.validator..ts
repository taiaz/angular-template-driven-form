import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
@Directive({
    selector: '[emailValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: EmailValidatorDirective,
        multi: true
    }]
})
export class EmailValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
        if (control.value && !control.value.toString().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            return { emailInvalid: 'Please enter valid email address'};
        }
        return null;
    }
}