import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

import { INVALID_DATE } from '../constants/date-forms'

export class DateFormsValidator {
  static invalidBsDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return String(control.value) !== 'Invalid Date' ? null : INVALID_DATE
    }
  }
}
