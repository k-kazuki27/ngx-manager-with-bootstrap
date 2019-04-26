import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-question-tooltip',
  templateUrl: './question-tooltip.component.html',
  styleUrls: ['./question-tooltip.component.scss']
})
export class QuestionTooltipComponent implements OnInit {
  @Input()
  message: string

  constructor() {}

  ngOnInit() {}
}
