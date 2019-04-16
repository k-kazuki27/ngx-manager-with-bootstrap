import { Component, OnDestroy, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

import { PagesService } from '../../services/pages.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  isActive: boolean
  collapsed: boolean
  showMenu: string
  pushRightClass: string

  private onDestroy$ = new Subject()

  constructor(public router: Router, private pagesService: PagesService) {
    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar()
      }
    })
  }

  ngOnInit() {
    this.isActive = false
    this.collapsed = false
    this.showMenu = ''
    this.pushRightClass = 'push-right'

    this.pagesService.collapsedValueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(result => {
        this.collapsed = result
      })
  }

  ngOnDestroy() {
    this.onDestroy$.next()
  }

  eventCalled() {
    this.isActive = !this.isActive
  }

  collapseMenu(collapsed) {}

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0'
    } else {
      this.showMenu = element
    }
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body')
    return dom.classList.contains(this.pushRightClass)
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body')
    dom.classList.toggle(this.pushRightClass)
  }

  logout() {
    sessionStorage.removeItem('isLoggedin')
    this.router.navigate(['/login'])
  }
}
