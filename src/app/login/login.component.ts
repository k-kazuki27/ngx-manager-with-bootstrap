import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { routerTransition } from '../router.animations'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    sessionStorage.setItem('isLoggedin', 'true')
    this.router.navigate(['/'])
  }
}
