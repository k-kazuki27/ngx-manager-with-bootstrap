import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import {
  BsDatepickerConfig,
  BsDatepickerModule,
  BsLocaleService,
  defineLocale,
  jaLocale,
  TimepickerModule
} from 'ngx-bootstrap'

import { getDatepickerConfig } from './date-forms-shared'
import { DatePickerComponent } from './date-picker/date-picker.component'
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component'

@NgModule({
  declarations: [DatePickerComponent, DateTimePickerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  exports: [DatePickerComponent, DateTimePickerComponent],
  providers: [{ provide: BsDatepickerConfig, useFactory: getDatepickerConfig }]
})
export class DateFormsModule {
  constructor(private bsLocaleService: BsLocaleService) {
    jaLocale.invalidDate = '不正な日付'
    defineLocale('ja', jaLocale)
    this.bsLocaleService.use('ja')
  }
}
