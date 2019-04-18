import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BsDropdownModule } from 'ngx-bootstrap'
import { PageHeaderModule } from 'src/app/shared'

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
    BsDropdownModule.forRoot()
  ]
})
export class UserModule {}
