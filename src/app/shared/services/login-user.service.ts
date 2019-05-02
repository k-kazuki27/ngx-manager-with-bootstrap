import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

import { UserDTO } from '..'

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  private loginUser$: BehaviorSubject<UserDTO>
  constructor() {}

  get loginUserValueChanges(): Observable<UserDTO> {
    if (!this.loginUser$) {
      this.loginUser$ = new BehaviorSubject<UserDTO>(null)
    }
    return this.loginUser$.asObservable()
  }

  setLoginUser(loginUser: UserDTO): void {
    if (this.loginUser$) {
      this.loginUser$.next(loginUser)
    } else {
      this.loginUser$ = new BehaviorSubject<UserDTO>(loginUser)
    }
  }
}
