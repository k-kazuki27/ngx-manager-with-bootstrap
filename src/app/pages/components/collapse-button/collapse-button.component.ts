import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-collapse-button',
  templateUrl: './collapse-button.component.html',
  styleUrls: ['./collapse-button.component.scss']
})
export class CollapseButtonComponent implements OnInit {
  @Output()
  collapseMenu = new EventEmitter<boolean>()

  collapsed: boolean

  constructor() {}

  ngOnInit() {
    this.collapsed = false
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed
    this.collapseMenu.emit(this.collapsed)
  }
}
