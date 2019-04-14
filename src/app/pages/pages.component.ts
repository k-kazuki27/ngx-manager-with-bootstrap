import { Component, OnInit } from '@angular/core'

import { PagesService } from './services/pages.service'

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  collapedSideBar: boolean

  constructor(private agesService: PagesService) {}

  ngOnInit() {}

  receiveCollapsed($event) {
    this.collapedSideBar = $event
  }
}
