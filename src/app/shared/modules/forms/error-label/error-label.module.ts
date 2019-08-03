import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ErrorLabelComponent } from './error-label.component'

@NgModule({
  declarations: [ErrorLabelComponent],
  imports: [CommonModule],
  exports: [ErrorLabelComponent]
})
export class ErrorLabelModule {}
