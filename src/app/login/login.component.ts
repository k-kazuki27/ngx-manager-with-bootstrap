import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

import { routerTransition } from '../router.animations'

const LOGIN_ERROR = 'ユーザID、もしくはパスワードが間違っています。'
const REQUIRED = 'ユーザIDとパスワードを入力してください。'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  form: FormGroup
  errorMessage: string

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      userId: [null, []],
      password: [null, []]
    })
    this.errorMessage = null
  }

  get userId(): FormControl {
    return this.form.get('userId') as FormControl
  }
  get password(): FormControl {
    return this.form.get('password') as FormControl
  }

  login(): void {
    if (!this.userId.value || !this.password.value) {
      this.errorMessage = REQUIRED
      return
    }

    setTimeout(() => {
      sessionStorage.setItem('isLoggedin', 'true')
      this.router.navigate(['/'])
    }, 500)
  }
}
