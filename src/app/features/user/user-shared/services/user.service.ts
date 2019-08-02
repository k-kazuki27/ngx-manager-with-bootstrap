import { Injectable } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Page, RouteHistoryService } from 'src/app/shared'

import { UserServiceModule } from './user-service.module'

@Injectable({
  providedIn: UserServiceModule
})
export class UserService {
  private form!: FormGroup
  private page!: Page

  constructor(private routeHistoryService: RouteHistoryService) {}

  get searchForm(): FormGroup | null {
    if (this.routeHistoryService.isFromDetailToList()) {
      return this.form
    }
    return null
  }

  get searchPage(): Page | null {
    if (this.routeHistoryService.isFromDetailToList()) {
      return this.page
    }
    return null
  }

  saveSearch(form: FormGroup, page: Page) {
    this.form = form
    this.page = page
  }
}
