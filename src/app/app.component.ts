import { Component } from '@angular/core'
import { SwUpdate } from '@angular/service-worker'
import { detect } from 'detect-browser'
import { interval } from 'rxjs'

import { RouteHistoryService } from './shared'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // 履歴保持のため、インスタンス生成だけしておく(RouteHistoryService)
  constructor(
    private swUpdate: SwUpdate,
    private routeHistoryService: RouteHistoryService
  ) {
    console.log(detect())

    // updateChecker
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        window.location.reload()
      })
      interval(60 * 60 * 1000).subscribe(() => {
        this.swUpdate.checkForUpdate()
      })
    }
  }
}
