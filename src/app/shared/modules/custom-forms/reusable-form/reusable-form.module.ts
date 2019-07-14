import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ReusableFormComponent } from './reusable-form.component'

@NgModule({
  declarations: [ReusableFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ReusableFormComponent]
})
export class ReusableFormModule {}
