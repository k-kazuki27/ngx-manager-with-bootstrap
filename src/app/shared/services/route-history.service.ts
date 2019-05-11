import { Injectable } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RouteHistoryService {
  previousUrl!: string
  currentUrl!: string

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(e => {
        const nav = e as NavigationEnd
        this.previousUrl = this.currentUrl
        this.currentUrl = nav.url
      })
  }

  isFromDetailToList(): boolean {
    if (!this.previousUrl) {
      return false
    }
    const currentBasePath = this.currentUrl.split('/')
    const previousBasePath = this.previousUrl.split('/')
    return currentBasePath[1] === previousBasePath[1]
  }
}
