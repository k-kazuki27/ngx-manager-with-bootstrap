import { Component } from '@angular/core'
import browser from 'browser-detect'

import { RouteHistoryService } from './shared'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private routeHistoryService: RouteHistoryService) {
    // 履歴保持のため、インスタンス生成だけしておく
    console.log(browser())
  }
}
