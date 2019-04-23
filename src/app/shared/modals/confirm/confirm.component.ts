import { Component, OnInit } from '@angular/core'
import { BsModalRef } from 'ngx-bootstrap'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  message: string
  result: Subject<boolean>

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.result = new Subject()
  }

  ok(): void {
    this.result.next(true)
    this.bsModalRef.hide()
  }
}
