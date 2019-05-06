import { CommonModule, DatePipe } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { OrderModule } from 'ngx-order-pipe'

import {
  ConfirmModule,
  CustomPaginationModule,
  DateInputModule,
  DropdownPageLinesModule,
  ErrorLabelModule,
  PageHeaderModule,
  QuestionTooltipModule,
  RequiredModule
} from '.'

const modules = [
  CommonModule,
  ReactiveFormsModule,
  PageHeaderModule,
  DropdownPageLinesModule,
  CustomPaginationModule,
  ConfirmModule,
  RequiredModule,
  ErrorLabelModule,
  QuestionTooltipModule,
  DateInputModule,
  OrderModule
]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: [DatePipe]
})
export class SharedModule {}
