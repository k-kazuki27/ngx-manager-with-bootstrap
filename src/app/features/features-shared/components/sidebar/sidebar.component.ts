import { Component, OnDestroy, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

import { PagesService } from '../../services/features.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  collapsed!: boolean
  overSidebar!: boolean

  private onDestroy$ = new Subject()

  constructor(public router: Router, private pagesService: PagesService) {
    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.overSidebar
      ) {
        this.overSidebar = !this.overSidebar
      }
    })
  }

  ngOnInit() {
    this.collapsed = false
    this.overSidebar = false

    this.pagesService.collapsedValueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(result => {
        this.collapsed = result
      })

    this.pagesService.toggleSidebarValueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.overSidebar = !this.overSidebar
      })
  }

  ngOnDestroy() {
    this.onDestroy$.next()
  }

  logout() {
    sessionStorage.removeItem('isLoggedin')
    this.router.navigate(['/login'])
  }
}
