import { Injectable } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { UserResolverModule } from './user-resolver.module'

@Injectable({
  providedIn: UserResolverModule
})
export class UserService {
  searchForm: FormGroup
  constructor() {}
}
