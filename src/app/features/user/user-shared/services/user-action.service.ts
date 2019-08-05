import { Injectable } from '@angular/core'

import { UserServiceModule } from './user-service.module'

@Injectable({
  providedIn: UserServiceModule
})
export class UserActionService {
  constructor() {}
}
