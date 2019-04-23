import { Injectable } from '@angular/core'
import { BsModalRef, BsModalService } from 'ngx-bootstrap'
import { Subject } from 'rxjs'

import { ConfirmComponent } from './confirm.component'

@Injectable()
export class ConfirmService {
  private bsModalRef: BsModalRef

  constructor(private modalService: BsModalService) {}

  openRemoveConfirm(): Subject<boolean> {
    return this.openModal('削除します。よろしいですか？')
  }

  openEditConfirm(): Subject<boolean> {
    return this.openModal('登録します。よろしいですか？')
  }

  private openModal(message: string): Subject<boolean> {
    this.bsModalRef = this.modalService.show(ConfirmComponent, {
      initialState: { message }
    })

    return this.bsModalRef.content.result
  }
}
