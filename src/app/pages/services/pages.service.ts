import { BreakpointObserver } from '@angular/cdk/layout'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { map } from 'rxjs/operators'

import { PagesResolverModule } from './pages-resolver.module'

@Injectable({
  providedIn: PagesResolverModule
})
export class PagesService {
  private collapsed$ = new BehaviorSubject<boolean>(false)
  private toggleSidebar$ = new Subject<null>()

  constructor(private breakpointObserver: BreakpointObserver) {}

  get collapsedValueChanges(): Observable<boolean> {
    return this.collapsed$.asObservable()
  }

  setCollapsed(result: boolean): void {
    this.collapsed$.next(result)
  }

  get toggleSidebarValueChanges(): Observable<null> {
    return this.toggleSidebar$.asObservable()
  }

  toggleSidebar(): void {
    this.toggleSidebar$.next()
  }

  get isSmallValueChanges(): Observable<boolean> {
    return this.breakpointObserver
      .observe('(max-width: 992px)')
      .pipe(map(result => result.matches))
  }
}
