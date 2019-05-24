import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BsDropdownModule } from 'ngx-bootstrap'

import { InputDropdownComponent } from './input-dropdown.component'

@NgModule({
  declarations: [InputDropdownComponent],
  imports: [CommonModule, ReactiveFormsModule, BsDropdownModule.forRoot()],
  exports: [InputDropdownComponent]
})
export class InputDropdownModule {}
