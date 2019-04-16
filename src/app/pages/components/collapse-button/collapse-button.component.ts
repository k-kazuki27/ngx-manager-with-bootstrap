import { Component, OnInit } from '@angular/core'

import { PagesService } from '../../services/pages.service'

@Component({
  selector: 'app-collapse-button',
  templateUrl: './collapse-button.component.html',
  styleUrls: ['./collapse-button.component.scss']
})
export class CollapseButtonComponent implements OnInit {
  collapsed: boolean

  constructor(private pagesService: PagesService) {}

  ngOnInit() {
    this.collapsed = false
  }

  collapse() {
    this.collapsed = !this.collapsed
    this.pagesService.setCollapsed(this.collapsed)
  }
}
