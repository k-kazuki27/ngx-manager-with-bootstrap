import { Component } from '@angular/core'
import { detect } from 'detect-browser'

import { RouteHistoryService } from './shared'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // 履歴保持のため、インスタンス生成だけしておく(RouteHistoryService)
  constructor(private routeHistoryService: RouteHistoryService) {
    console.log(detect())
  }
}
