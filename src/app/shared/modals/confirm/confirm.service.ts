import { Injectable } from '@angular/core'
import { BsModalRef, BsModalService } from 'ngx-bootstrap'

import { ConfirmComponent } from './confirm.component'

@Injectable()
export class ConfirmService {
  bsModalRef: BsModalRef

  constructor(private modalService: BsModalService) {}

  openModal() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    }
    this.bsModalRef = this.modalService.show(ConfirmComponent, { initialState })
    this.bsModalRef.content.closeBtnName = 'Close'
  }
}
