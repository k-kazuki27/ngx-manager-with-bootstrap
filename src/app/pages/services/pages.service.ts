import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { PagesResolverModule } from './pages-resolver.module'

@Injectable({
  providedIn: PagesResolverModule
})
export class PagesService {
  private collapsed$ = new BehaviorSubject<boolean>(false)

  constructor(private breakpointObserver: BreakpointObserver) {}

  get collapsedValueChanges(): Observable<boolean> {
    return this.collapsed$.asObservable()
  }

  setCollapsed(result: boolean): void {
    this.collapsed$.next(result)
  }

  get isMobileValueChanges(): Observable<boolean> {
    return this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map(result => result.matches))
  }
}
