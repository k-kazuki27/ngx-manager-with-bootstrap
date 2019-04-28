import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { PageChangedEvent } from 'ngx-bootstrap'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    console.log(event.page)
    this.pageChanged.emit(event.page)
  }
}
