import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

import { routerTransition } from '../router.animations'
import {
  LOGIN_ERROR,
  LoginApi,
  LoginUserService,
  REQUIRED_ERROR,
  StorageService
} from '../shared'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup
  errorMessage: string

  private onDestroy$ = new Subject()

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginApi: LoginApi,
    private loginUserService: LoginUserService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.storageService.removeAuth()

    this.form = this.fb.group({
      userId: [null, []],
      password: [null, []]
    })
    this.errorMessage = null
  }

  ngOnDestroy() {
    this.onDestroy$.next()
  }

  get userId(): FormControl {
    return this.form.get('userId') as FormControl
  }
  get password(): FormControl {
    return this.form.get('password') as FormControl
  }

  login(): void {
    if (!this.userId.value || !this.password.value) {
      this.errorMessage = REQUIRED_ERROR
      return
    }

    this.loginApi
      .login(
        {
          userId: this.userId.value,
          password: this.password.value
        },
        'body',
        true
      )
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(
        res => {
          this.loginUserService.setLoginUser(res)
          this.storageService.setAuth()
          this.router.navigate(['/'])
        },
        () => {
          this.errorMessage = LOGIN_ERROR
        }
      )
  }
}
