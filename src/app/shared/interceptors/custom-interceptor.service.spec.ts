import { Type } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { CustomInterceptorService } from './custom-interceptor.service'

describe('CustomInterceptorService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    })
  )

  it('should be created', () => {
    const service: CustomInterceptorService = TestBed.get(
      CustomInterceptorService as Type<CustomInterceptorService>
    )
    expect(service).toBeTruthy()
  })
})
