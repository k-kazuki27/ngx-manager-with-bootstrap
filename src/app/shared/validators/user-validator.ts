import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors
} from '@angular/forms'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { UserApi, UsersDTO } from '../api-clients'

export class UserValidator {
  static unique(userApi: UserApi): AsyncValidatorFn {
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
}
