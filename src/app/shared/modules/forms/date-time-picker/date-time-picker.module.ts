import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
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
  providers: [{ provide: BsDatepickerConfig, useFactory: getDatepickerConfig }]
})
export class DateTimePickerModule {
  constructor(private bsLocaleService: BsLocaleService) {
    defineLocale('ja', jaLocale)
    this.bsLocaleService.use('ja')
  }
}
function getDatepickerConfig(): BsDatepickerConfig {
  return Object.assign(new BsDatepickerConfig(), {
    dateInputFormat: 'YYYY-MM-DD',
    containerClass: 'theme-blue',
    showWeekNumbers: false
  })
}
