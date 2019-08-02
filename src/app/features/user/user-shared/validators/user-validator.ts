import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { UserApi, UsersDTO } from 'src/app/shared'

export class UserValidator {
  static uniqueUserId(userApi: UserApi): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Promise<ValidationErrors | null>
      | Observable<ValidationErrors | null> => {
      const userId = control.value
      console.log('UserValidator')
      return userApi.findUsers(1, 2).pipe(
        map((res: UsersDTO) => {
          return res ? null : { uniqueUserId: true }
        })
      )
    }
  }

  static samePassword(target: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value !== target.value ? { samePassword: true } : null
    }
  }
}
