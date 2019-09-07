import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export class DateFormsValidator {
  static invalidBsDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return String(control.value) !== 'Invalid Date'
        ? null
        : { invalidDate: true }
    }
  }
}
