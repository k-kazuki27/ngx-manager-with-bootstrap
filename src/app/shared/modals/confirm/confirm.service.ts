import { Injectable } from '@angular/core'
import { BsModalRef, BsModalService } from 'ngx-bootstrap'

import { ConfirmComponent } from './confirm.component'

@Injectable()
export class ConfirmService {
  bsModalRef: BsModalRef

  constructor(private modalService: BsModalService) {}

  openRemoveConfirm() {
    this.openModal('削除')
  }

  private openModal(message: string) {
    const confirmMsg = `${message}します。よろしいですか？`
    this.bsModalRef = this.modalService.show(ConfirmComponent, {
      initialState: { msg: confirmMsg }
    })
  }
}
