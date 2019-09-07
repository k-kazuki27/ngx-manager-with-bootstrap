import { CommonModule, DatePipe } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { OrderModule } from 'ngx-order-pipe'

import {
  ConfirmModule,
  CustomPaginationModule,
  DateFormsModule,
  DropdownPageLinesModule,
  ErrorLabelModule,
  PageHeaderModule,
  QuestionTooltipModule,
  RequiredModule,
  UnsavedChangeGuard
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
  DateFormsModule,
  OrderModule
]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: [DatePipe, UnsavedChangeGuard]
})
export class SharedModule {}
