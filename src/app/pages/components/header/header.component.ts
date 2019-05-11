import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { LoginUserService, UserDTO } from 'src/app/shared'

import { PagesService } from '../../services/pages.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  loginUser!: UserDTO | null

  private onDestroy$ = new Subject()

  constructor(
    private router: Router,
    private pagesService: PagesService,
    private loginUserService: LoginUserService
  ) {}

  ngOnInit() {
    this.loginUserService.loginUserValueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(user => {
        this.loginUser = user
      })
  }

  ngOnDestroy() {
    this.onDestroy$.next()
  }

  toggleSidebar() {
    this.pagesService.toggleSidebar()
  }

  logout() {
    this.router.navigate(['/login'])
  }
}
