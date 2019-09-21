import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { SAME_PASSWORD, UserApi, UserResultDTO } from 'src/app/shared'

export class UserValidator {
  static uniqueUserId(userApi: UserApi): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Promise<ValidationErrors | null>
      | Observable<ValidationErrors | null> => {
      const userId = control.value
      return userApi.findUsers(undefined, undefined, userId).pipe(
        map((res: UserResultDTO) => {
          return res.totalItems === 0 ? null : { uniqueUserId: true }
        })
      )
    }
  }

  static samePassword(target: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value !== target.value ? SAME_PASSWORD : null
    }
  }
}
