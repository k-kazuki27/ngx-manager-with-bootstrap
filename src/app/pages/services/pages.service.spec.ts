import { TestBed } from '@angular/core/testing'

import { PagesResolverModule } from './pages-resolver.module'
import { PagesService } from './pages.service'

describe('PagesService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [PagesResolverModule]
    })
  )

  it('should be created', () => {
    const service: PagesService = TestBed.get(PagesService)
    expect(service).toBeTruthy()
  })
})
