import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BsDropdownModule } from 'ngx-bootstrap'

import { InputDropdownComponent } from './input-dropdown.component'

@NgModule({
  declarations: [InputDropdownComponent],
  imports: [CommonModule, BsDropdownModule.forRoot()],
  exports: [InputDropdownComponent]
})
export class InputDropdownModule {}
