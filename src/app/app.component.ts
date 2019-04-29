import { Component } from '@angular/core'

import { RouteHistoryService } from './shared'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private routeHistoryService: RouteHistoryService) {
    // 履歴保持のため、インスタンス生成だけしておく
  }
}
