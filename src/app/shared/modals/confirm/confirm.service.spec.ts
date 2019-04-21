import { TestBed } from '@angular/core/testing'
import { ModalModule } from 'ngx-bootstrap'

import { ConfirmService } from './confirm.service'

describe('ConfirmService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ConfirmService],
      imports: [ModalModule.forRoot()]
    })
  )

  it('should be created', () => {
    const service: ConfirmService = TestBed.get(ConfirmService)
    expect(service).toBeTruthy()
  })
})
