import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

import { PagesService } from './services/pages.service'

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, OnDestroy {
  collapedSideBar: boolean

  private onDestroy$ = new Subject()

  constructor(private pagesService: PagesService) {}

  ngOnInit() {
    this.pagesService.collapsedValueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(result => {
        this.collapedSideBar = result
      })

    this.pagesService.isSmallValueChanges.subscribe(result => {
      console.log('size:', result)
    })
  }

  ngOnDestroy() {
    this.onDestroy$.next()
  }
}
