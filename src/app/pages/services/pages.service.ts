import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { PagesResolverModule } from './pages-resolver.module'

@Injectable({
  providedIn: PagesResolverModule
})
export class PagesService {
  isMobile$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches))

  constructor(private breakpointObserver: BreakpointObserver) {}
}
