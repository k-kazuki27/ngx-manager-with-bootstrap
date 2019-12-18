import { Type } from '@angular/core'
import { TestBed } from '@angular/core/testing'

import { FeaturesServiceModule } from './features-service.module'
import { PagesService } from './features.service'

describe('PagesService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [FeaturesServiceModule]
    })
  )

  it('should be created', () => {
    const service: PagesService = TestBed.get(
      PagesService as Type<PagesService>
    )
    expect(service).toBeTruthy()
  })
})
