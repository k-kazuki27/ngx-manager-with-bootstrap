import { Type } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { UserServiceModule } from './user-service.module'
import { UserService } from './user.service'

describe('UserService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [UserServiceModule, RouterTestingModule]
    })
  )

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService as Type<UserService>)
    expect(service).toBeTruthy()
  })
})
