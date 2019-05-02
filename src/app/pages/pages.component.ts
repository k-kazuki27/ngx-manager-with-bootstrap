import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { LoginUserService } from 'src/app/shared'

import { LoginApi } from '../shared'
import { PagesService } from './services/pages.service'

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, OnDestroy {
  collapedSideBar: boolean

  private onDestroy$ = new Subject()

  constructor(
    private router: Router,
    private pagesService: PagesService,
    private loginUserService: LoginUserService,
    private loginApi: LoginApi
  ) {}

  ngOnInit() {
    this.pagesService.collapsedValueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(result => {
        this.collapedSideBar = result
      })

    this.loginApi
      .getCurrentAuthenticatedUser()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(
        res => {
          console.log(res)
          this.loginUserService.setLoginUser(res)
        },
        () => {
          this.router.navigate(['/login'])
        }
      )
  }

  ngOnDestroy() {
    this.onDestroy$.next()
  }
}
