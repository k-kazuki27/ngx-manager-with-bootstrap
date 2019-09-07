import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
  BsDatepickerConfig,
  BsDatepickerModule,
  BsLocaleService,
  defineLocale,
  jaLocale,
  TimepickerModule
} from 'ngx-bootstrap'

import { DateTimePickerComponent } from './date-time-picker.component'

@NgModule({
  declarations: [DateTimePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  exports: [DateTimePickerComponent],
  providers: [
    { provide: BsDatepickerConfig, useFactory: getDatepickerConfigByTime }
  ]
})
export class DateTimePickerModule {
  constructor(private bsLocaleService: BsLocaleService) {
    jaLocale.invalidDate = '不正な日付'
    defineLocale('ja', jaLocale)
    this.bsLocaleService.use('ja')
  }
}
export function getDatepickerConfigByTime(): BsDatepickerConfig {
  return Object.assign(new BsDatepickerConfig(), {
    dateInputFormat: 'YYYY-MM-DD',
    containerClass: 'theme-blue',
    showWeekNumbers: false
  })
}
