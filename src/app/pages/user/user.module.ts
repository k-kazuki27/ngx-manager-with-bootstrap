import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import {
  BsDatepickerConfig,
  BsDatepickerModule,
  BsLocaleService,
  defineLocale,
  jaLocale,
  PaginationModule,
} from 'ngx-bootstrap'
import { DropdownPageLinesModule, PageHeaderModule } from 'src/app/shared'
import { ConfirmModule } from 'src/app/shared/modals/confirm/confirm.module'

import { UserDetailComponent } from './user-detail/user-detail.component'
import { UserListComponent } from './user-list/user-list.component'
import { UserRoutingModule } from './user-routing.module'

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
    DropdownPageLinesModule,
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ConfirmModule
  ],
  providers: [
    BsDatepickerModule.forRoot().providers,
    { provide: BsDatepickerConfig, useFactory: getDatepickerConfig }
  ]
})
export class UserModule {
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
