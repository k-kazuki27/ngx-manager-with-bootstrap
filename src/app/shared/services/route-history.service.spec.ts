import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { RouteHistoryService } from './route-history.service'

describe('RouteHistoryService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [RouterTestingModule] })
  )

  it('should be created', () => {
    const service: RouteHistoryService = TestBed.get(RouteHistoryService)
    expect(service).toBeTruthy()
  })
})
