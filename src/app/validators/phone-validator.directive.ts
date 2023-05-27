import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[appPhoneValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PhoneValidatorDirective,
        multi: true
    }]
})
export class PhoneValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {

        if (control.value && !control.value.toString().match(/^[0-9]+$/)) {
            return { phoneNumberInvalid: 'Phone number must contain only number' };
        }

        if (control.value && control.value.length != 10) {
            return { 'phoneNumberInvalid': 'Phone number must be 10 digits' };
        }

        return null;
    }
}