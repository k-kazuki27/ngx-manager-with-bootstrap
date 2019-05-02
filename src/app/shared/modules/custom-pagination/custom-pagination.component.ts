import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { PageChangedEvent } from 'ngx-bootstrap'

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss']
})
export class CustomPaginationComponent implements OnInit {
  @Input()
  currentPage: number

  @Input()
  itemsPerPage: number

  @Input()
  totalItems: number

  @Output()
  pageChanged = new EventEmitter<number>()

  constructor() {}

  ngOnInit() {}

  change(event: PageChangedEvent): void {
    this.pageChanged.emit(event.page)
  }
}
