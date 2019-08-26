import { inject, TestBed } from '@angular/core/testing'

import { ConfirmModule } from './../modals/confirm/confirm.module'
import { UnsavedChangeGuard } from './unsaved-change.guard'

describe('UnsavedChangeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsavedChangeGuard],
      imports: [ConfirmModule]
    })
  })

  it('should ...', inject([UnsavedChangeGuard], (guard: UnsavedChangeGuard) => {
    expect(guard).toBeTruthy()
  }))
})
