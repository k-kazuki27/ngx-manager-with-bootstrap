import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TooltipModule } from 'ngx-bootstrap'

import { QuestionTooltipComponent } from './question-tooltip.component'

@NgModule({
  declarations: [QuestionTooltipComponent],
  imports: [CommonModule, TooltipModule.forRoot()],
  exports: [QuestionTooltipComponent]
})
export class QuestionTooltipModule {}
