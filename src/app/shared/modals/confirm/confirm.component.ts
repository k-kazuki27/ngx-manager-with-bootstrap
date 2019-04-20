import { Component, OnInit } from '@angular/core'
import { BsModalRef } from 'ngx-bootstrap'

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  title: string
  closeBtnName: string
  list: any[] = []

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.list.push('PROFIT!!!')
  }
}
