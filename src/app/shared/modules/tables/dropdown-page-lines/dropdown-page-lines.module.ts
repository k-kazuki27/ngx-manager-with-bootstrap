import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BsDropdownModule } from 'ngx-bootstrap'

import { DropdownPageLinesComponent } from './dropdown-page-lines.component'

@NgModule({
  declarations: [DropdownPageLinesComponent],
  imports: [CommonModule, BsDropdownModule.forRoot()],
  exports: [DropdownPageLinesComponent]
})
export class DropdownPageLinesModule {}
