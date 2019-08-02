import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { LoginUserService } from 'src/app/shared'

import { LoginApi } from '../shared'
import { PagesService } from './features-shared/services/features.service'

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit, OnDestroy {
  collapedSideBar!: boolean

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
