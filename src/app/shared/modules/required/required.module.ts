import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { RequiredComponent } from './required.component'

@NgModule({
  declarations: [RequiredComponent],
  imports: [CommonModule],
  exports: [RequiredComponent]
})
export class RequiredModule {}
