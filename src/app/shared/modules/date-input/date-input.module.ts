import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import {
  BsDatepickerConfig,
  BsDatepickerModule,
  BsLocaleService,
  defineLocale,
  jaLocale
} from 'ngx-bootstrap'

import { DateInputComponent } from './date-input.component'

@NgModule({
  declarations: [DateInputComponent],
  imports: [CommonModule, ReactiveFormsModule, BsDatepickerModule],
  exports: [DateInputComponent],
  providers: [
    BsDatepickerModule.forRoot().providers,
    { provide: BsDatepickerConfig, useFactory: getDatepickerConfig }
  ]
})
export class DateInputModule {
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
