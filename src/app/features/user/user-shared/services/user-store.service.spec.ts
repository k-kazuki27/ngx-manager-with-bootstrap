import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { UserServiceModule } from './user-service.module'
import { UserStoreService } from './user-store.service'

describe('UserStoreService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [UserServiceModule, RouterTestingModule]
    })
  )

  it('should be created', () => {
    const service: UserStoreService = TestBed.get(UserStoreService)
    expect(service).toBeTruthy()
  })
})
