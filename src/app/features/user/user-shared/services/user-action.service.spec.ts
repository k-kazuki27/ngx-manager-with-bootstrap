import { TestBed } from '@angular/core/testing'

import { UserActionService } from './user-action.service'
import { UserServiceModule } from './user-service.module'

describe('UserActionService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [UserServiceModule]
    })
  )

  it('should be created', () => {
    const service: UserActionService = TestBed.get(UserActionService)
    expect(service).toBeTruthy()
  })
})
