import { Injectable } from '@angular/core'
import { BsModalRef, BsModalService } from 'ngx-bootstrap'

import { ConfirmComponent } from './confirm.component'

@Injectable()
export class ConfirmService {
  bsModalRef: BsModalRef

  constructor(private modalService: BsModalService) {}

  openRemoveConfirm() {
    this.openModal('削除します。よろしいですか？')
  }

  private openModal(message: string) {
    this.bsModalRef = this.modalService.show(ConfirmComponent, {
      initialState: { message }
    })
  }
}
