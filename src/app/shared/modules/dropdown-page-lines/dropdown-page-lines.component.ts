import { Component, EventEmitter, OnInit, Output } from '@angular/core'

const PAGE_LINES = [10, 25, 50, 100]

@Component({
  selector: 'app-dropdown-page-lines',
  templateUrl: './dropdown-page-lines.component.html',
  styleUrls: ['./dropdown-page-lines.component.scss']
})
export class DropdownPageLinesComponent implements OnInit {
  @Output()
  changePageLines = new EventEmitter<number>()

  pageLines = PAGE_LINES
  constructor() {}

  ngOnInit() {}

  selectPageLines(lines: number) {
    this.changePageLines.emit(lines)
  }
}
