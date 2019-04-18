import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { PageHeaderModule } from 'src/app/shared'

import { UserDetailComponent } from './user-detail/user-detail.component'
import { UserListComponent } from './user-list/user-list.component'
import { UserRoutingModule } from './user-routing.module'

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [CommonModule, UserRoutingModule, PageHeaderModule]
})
export class UserModule {}