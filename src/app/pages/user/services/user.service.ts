import { Injectable } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { RouteHistoryService } from 'src/app/shared'

import { UserResolverModule } from './user-resolver.module'

@Injectable({
  providedIn: UserResolverModule
})
export class UserService {
  private form: FormGroup
  constructor(private routeHistoryService: RouteHistoryService) {}

  get searchForm(): FormGroup | null {
    if (this.routeHistoryService.isFromDetailToList()) {
      return this.form
    }
    return null
  }

  set searchForm(form: FormGroup) {
    this.form = form
  }
}
