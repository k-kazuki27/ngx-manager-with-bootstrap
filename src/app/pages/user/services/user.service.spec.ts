import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { UserResolverModule } from './user-resolver.module'
import { UserService } from './user.service'

describe('UserService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [UserResolverModule, RouterTestingModule]
    })
  )

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService)
    expect(service).toBeTruthy()
  })
})
