import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BsDatepickerConfig, BsDatepickerModule, BsLocaleService, defineLocale, jaLocale } from 'ngx-bootstrap'
import { OrderModule } from 'ngx-order-pipe'

import {
  ConfirmModule,
  CustomPaginationModule,
  DropdownPageLinesModule,
  ErrorLabelModule,
  PageHeaderModule,
  RequiredModule,
} from '.'

const modules = [
  CommonModule,
  ReactiveFormsModule,
  BsDatepickerModule,
  PageHeaderModule,
  DropdownPageLinesModule,
  CustomPaginationModule,
  ConfirmModule,
  RequiredModule,
  ErrorLabelModule,
  OrderModule
]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: [
    BsDatepickerModule.forRoot().providers,
    { provide: BsDatepickerConfig, useFactory: getDatepickerConfig }
  ]
})
export class SharedModule {
  constructor(private bsLocaleService: BsLocaleService) {
    defineLocale('ja', jaLocale)
    this.bsLocaleService.use('ja')
  }
}

export function getDatepickerConfig(): BsDatepickerConfig {
  return Object.assign(new BsDatepickerConfig(), {
    dateInputFormat: 'YYYY-MM-DD',
    containerClass: 'theme-blue',
    showWeekNumbers: false
  })
}
